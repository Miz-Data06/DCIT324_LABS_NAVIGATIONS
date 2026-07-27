import { ScrollView, Text, View } from 'react-native';

const data = [
  { title: 'Exams Timetable Released', date: 'July 20', text: 'Check portal for your exact schedule.' },
  { title: 'Library Hours Extended', date: 'July 18', text: 'Open until midnight during exams.' },
  { title: 'SRC Elections', date: 'July 15', text: 'Voting opens next Monday.' },
  { title: 'Wi-Fi Maintenance', date: 'July 12', text: 'Balme network down 2-4am Saturday.' },
  { title: 'Career Fair', date: 'July 10', text: 'Companies visiting Great Hall forecourt.' },
];

export default function Announcements() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {data.map((a, i) => (
        <View key={i} style={{ marginBottom: 15 }}>
          <Text style={{ fontWeight: 'bold' }}>{a.title} — {a.date}</Text>
          <Text>{a.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}