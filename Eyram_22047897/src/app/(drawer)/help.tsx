import { ScrollView, Text, View } from 'react-native';

const faqs = [
  { q: 'How do I reset my password?', a: 'Go to the student portal and click Forgot Password.' },
  { q: 'Where do I check my results?', a: 'Results are on the SRIS portal under Grades.' },
  { q: 'Who do I contact for hostel issues?', a: 'Reach out to your hall administrator.' },
];

export default function Help() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {faqs.map((f, i) => (
        <View key={i} style={{ marginBottom: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>{f.q}</Text>
          <Text>{f.a}</Text>
        </View>
      ))}
    </ScrollView>
  );
}