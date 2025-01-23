import 'package:flutter/material.dart';
import 'package:mini_project/AIAssisstance.dart';
import 'package:mini_project/camerFeed.dart';

void main() {
  runApp(const MyFarmApp());
}

class MyFarmApp extends StatelessWidget {
  const MyFarmApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Smart Farm App',
      theme: ThemeData(
        primarySwatch: Colors.green,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Smart Farm Companion'),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            _buildOptionCard(
              context, 
              title: 'Farm Live Feed', 
              icon: Icons.camera_alt,
              description: 'View real-time farm monitoring',
              onTap: () {
                Navigator.push(
                  context, 
                  MaterialPageRoute(
                    builder: (context) => const FarmLiveFeedPage()
                  )
                );
              }
            ),
            const SizedBox(height: 20),
            _buildOptionCard(
              context,
              title: 'AI Farming Assistance',
              icon: Icons.agriculture,
              description: 'Get smart agricultural insights',
              onTap: () {
                Navigator.push(
                  context, 
                  MaterialPageRoute(
                    builder: (context) => const AIAgricultureLandingPage()
                  )
                );
              }
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildOptionCard(
    BuildContext context, {
    required String title, 
    required IconData icon, 
    required String description,
    required VoidCallback onTap,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Card(
        elevation: 5,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15),
        ),
        child: Container(
          width: 300,
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              Icon(
                icon, 
                size: 60, 
                color: Theme.of(context).primaryColor,
              ),
              const SizedBox(height: 10),
              Text(
                title, 
                style: Theme.of(context).textTheme.headlineSmall,
              ),
              const SizedBox(height: 10),
              Text(
                description,
                textAlign: TextAlign.center,
                style: Theme.of(context).textTheme.bodyMedium,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

// Placeholder pages for Live Feed and AI Assistance
class AIFarmingAssistancePage extends StatelessWidget {
  const AIFarmingAssistancePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('AI Farming Assistance'),
      ),
      body: const Center(
        child: Text(
          'AI Agricultural Insights\n(Coming Soon)',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}