import { router } from 'expo-router';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

export const events = [
  { id: '1', title: 'Freshers Night', date: 'Aug 1', description: 'Welcome party for new students at Legon Hall field.' },
  { id: '2', title: 'Hackathon 2026', date: 'Aug 5', description: '24-hour coding competition, CS Dept.' },
  { id: '3', title: 'Career Talk', date: 'Aug 8', description: 'Data careers panel with alumni.' },
  { id: '4', title: 'Football Finals', date: 'Aug 10', description: 'Interhall competition at the Legon Stadium.' },
  { id: '5', title: 'Cultural Night', date: 'Aug 15', description: 'Showcasing Ghanaian traditions and food.' },
];

export default function Feed() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {events.map((e) => (
        <TouchableOpacity key={e.id} onPress={() => router.push(`/(drawer)/(tabs)/home/${e.id}`)}>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{e.title} — {e.date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}