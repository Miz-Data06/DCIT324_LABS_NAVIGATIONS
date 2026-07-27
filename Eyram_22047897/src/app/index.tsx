import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Campus Connect</Text>
      <Button title="Get Started" onPress={() => router.push('/(drawer)/(tabs)/home')} />
    </View>
  );
}