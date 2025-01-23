import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:http/http.dart' as http;

class FarmLiveFeedPage extends StatefulWidget {
  const FarmLiveFeedPage({Key? key}) : super(key: key);

  @override
  _FarmLiveFeedPageState createState() => _FarmLiveFeedPageState();
}

class _FarmLiveFeedPageState extends State<FarmLiveFeedPage> {
  final TextEditingController _ipController = TextEditingController();
  String? _currentIpAddress;
  bool _isValidIp = false;
  bool _isLoading = false;
  String _errorMessage = '';

  // Regular expression for IP address validation
  final RegExp _ipRegExp = RegExp(
    r'^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
  );

  void _validateIpAddress(String value) {
    setState(() {
      _isValidIp = _ipRegExp.hasMatch(value);
      _currentIpAddress = _isValidIp ? value : null;
      _errorMessage = _isValidIp ? '' : 'Invalid IP Address';
    });
  }

  Future<void> _searchIpOnGoogle(String ip) async {
    if (!_isValidIp) return;

    setState(() {
      _isLoading = true;
    });

    try {
      // Verify if the IP is accessible
      final response = await http.get(Uri.parse('http://$ip'));
      
      if (response.statusCode == 200) {
        // If successful, launch Google search for the IP
        final Uri googleSearchUri = Uri.parse('https://www.google.com/search?q=$ip');
        
        if (await canLaunchUrl(googleSearchUri)) {
          await launchUrl(googleSearchUri);
        } else {
          _showErrorSnackBar('Could not launch Google search');
        }
      } else {
        _showErrorSnackBar('Unable to connect to the IP camera');
      }
    } catch (e) {
      _showErrorSnackBar('Error connecting to the IP: ${e.toString()}');
    } finally {
      setState(() {
        _isLoading = false;
      });
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Farm Live Feed'),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            const Text(
              'Enter IP Camera Address',
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _ipController,
              decoration: InputDecoration(
                labelText: 'IP Address',
                hintText: 'e.g., 192.168.1.36',
                prefixIcon: const Icon(Icons.camera_alt_outlined),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
                errorText: _errorMessage.isNotEmpty ? _errorMessage : null,
              ),
              keyboardType: TextInputType.number,
              onChanged: _validateIpAddress,
            ),
            const SizedBox(height: 20),
            ElevatedButton.icon(
              onPressed: _isValidIp && !_isLoading
                  ? () => _searchIpOnGoogle(_ipController.text)
                  : null,
              icon: _isLoading 
                  ? const CircularProgressIndicator(color: Colors.white)
                  : const Icon(Icons.search),
              label: Text(_isLoading ? 'Searching...' : 'Search IP'),
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(vertical: 15),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12),
                ),
              ),
            ),
            const SizedBox(height: 20),
            if (_currentIpAddress != null)
              Card(
                elevation: 4,
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                    children: [
                      const Text(
                        'Current IP Address',
                        style: TextStyle(
                          fontSize: 16,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 10),
                      Text(
                        _currentIpAddress!,
                        style: const TextStyle(
                          fontSize: 18,
                          color: Colors.blue,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _ipController.dispose();
    super.dispose();
  }
}