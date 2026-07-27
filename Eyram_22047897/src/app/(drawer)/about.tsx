import { Text, View } from 'react-native';

export default function About() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Campus Connect</Text>
      <Text>An app connecting UG students to campus life.</Text>
      <Text>Your Name — 10912345</Text>
    </View>
  );
}