import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:http/http.dart' as http;
import 'package:connectivity_plus/connectivity_plus.dart';

class AICropAnalysisPage extends StatefulWidget {
  const AICropAnalysisPage({Key? key}) : super(key: key);

  @override
  _AICropAnalysisPageState createState() => _AICropAnalysisPageState();
}

class _AICropAnalysisPageState extends State<AICropAnalysisPage> {
  File? _imageFile;
  Map<String, dynamic>? _analysisResult;
  bool _isLoading = false;
  bool _isConnected = true;

  @override
  void initState() {
    super.initState();
    _checkConnectivity();
  }

  Future<void> _checkConnectivity() async {
    final connectivityResult = await Connectivity().checkConnectivity();
    setState(() {
      _isConnected = connectivityResult == ConnectivityResult.mobile || connectivityResult == ConnectivityResult.wifi;
    });
  }

  Future<void> _pickImage(ImageSource source) async {
    try {
      setState(() {
        _isLoading = true;
        _analysisResult = null;
      });

      final ImagePicker picker = ImagePicker();
      final XFile? image = await picker.pickImage(
        source: source,
        imageQuality: 85,
        maxWidth: 1024,
      );

      if (image == null) {
        setState(() => _isLoading = false);
        _showErrorSnackBar('No image selected');
        return;
      }

      final File imageFile = File(image.path);
      final analysisResult = await _analyzeImage(imageFile.path);

      setState(() {
        _imageFile = imageFile;
        _analysisResult = analysisResult;
        _isLoading = false;
      });
    } catch (e) {
      setState(() => _isLoading = false);
      _showErrorSnackBar('Error: $e');
    }
  }

  Future<Map<String, dynamic>> _analyzeImage(String imagePath) async {
    if (!_isConnected) {
      _showErrorSnackBar('No internet connection');
      return {};
    }

    final url = Uri.parse('https://crop-analysis-440160446921.us-central1.run.app/predict');
    final request = http.MultipartRequest('POST', url)
      ..files.add(await http.MultipartFile.fromPath('image', imagePath));

    try {
      final streamedResponse = await request.send();
      final response = await http.Response.fromStream(streamedResponse);
      if (response.statusCode == 200) {
        final decodedResponse = jsonDecode(response.body);
        return {
          'Batch_Consistency': decodedResponse['Batch_Consistency'] * 10 + 1,
          'Color': decodedResponse['Color'] * 10 + 1,
          'Firmness': decodedResponse['Firmness'] * 10,
          'Shape_and_Size': decodedResponse['Shape_and_Size'] * 10 + 1,
          'Texture': decodedResponse['Texture'] * 10 + 1,
          'Damaged': decodedResponse['Damaged'] * 10,
        };
      } else {
        _showErrorSnackBar('Error analyzing image: ${response.statusCode} - ${response.body}');
        return {};
      }
    } catch (e) {
      _showErrorSnackBar('Error analyzing image: $e');
      return {};
    }
  }

  void _showErrorSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: Colors.red,
      ),
    );
  }

  Widget _buildAnalysisResultCard() {
    if (_analysisResult == null) return Container();

    final parameters = [
      'Batch Consistency', 'Color', 'Firmness',
      'Shape and Size', 'Texture', 'Damaged'
    ];

    return Card(
      margin: const EdgeInsets.all(16),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'AI Quality Analysis',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(height: 16),
            ...parameters.map((param) => _buildParameterRow(param, _analysisResult![param.replaceAll(' ', '_')])).toList(),
          ],
        ),
      ),
    );
  }

  Widget _buildParameterRow(String parameter, double value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            parameter,
            style: const TextStyle(fontSize: 16),
          ),
          Row(
            children: [
              Text(
                value.toStringAsFixed(1),
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(width: 8),
              Container(
                width: 100,
                height: 16,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  color: Colors.green.withOpacity(value / 10.0),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI Crop Quality Check'),
        backgroundColor: Colors.green,
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              const Text(
                'AI Quality Analysis',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 16),

              // Image Pick Buttons
              ElevatedButton.icon(
                onPressed: () => _pickImage(ImageSource.camera),
                icon: const Icon(Icons.camera_alt),
                label: const Text('Take Photo'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.green,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
              ),
              const SizedBox(height: 16),
              ElevatedButton.icon(
                onPressed: () => _pickImage(ImageSource.gallery),
                icon: const Icon(Icons.photo_library),
                label: const Text('Choose from Gallery'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.blue,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                ),
              ),

              // Loading Indicator
              if (_isLoading) ...[
                const SizedBox(height: 16),
                const Center(child: CircularProgressIndicator()),
              ],

              // Selected Image
              if (_imageFile != null) ...[
                const SizedBox(height: 16),
                Image.file(
                  _imageFile!,
                  height: 300,
                  fit: BoxFit.cover,
                ),
              ],

              // Analysis Results
              if (_analysisResult != null) _buildAnalysisResultCard(),
            ],
          ),
        ),
      ),
    );
  }
}