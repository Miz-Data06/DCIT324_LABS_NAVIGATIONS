import { ScrollView, Text } from 'react-native';

const classes = [
  { day: 'Monday', time: '8:00am', course: 'DCIT 324', venue: 'JQB 12' },
  { day: 'Monday', time: '10:00am', course: 'STAT 313', venue: 'Math Dept' },
  { day: 'Tuesday', time: '9:00am', course: 'DCIT 308', venue: 'JQB 4' },
  { day: 'Wednesday', time: '2:00pm', course: 'STAT 322', venue: 'Stat Lab' },
  { day: 'Thursday', time: '11:00am', course: 'DCIT 316', venue: 'JQB 12' },
];

export default function Timetable() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {classes.map((c, i) => (
        <Text key={i} style={{ marginBottom: 10 }}>{c.day} {c.time} — {c.course} ({c.venue})</Text>
      ))}
    </ScrollView>
  );
}