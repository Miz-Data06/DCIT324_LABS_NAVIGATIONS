import { router, useLocalSearchParams } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { events } from './index';

export default function EventDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const event = events.find((e) => e.id === id);

  if (!event) return <Text>Event not found</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{event.title}</Text>
      <Text>{event.date}</Text>
      <Text>{event.description}</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}