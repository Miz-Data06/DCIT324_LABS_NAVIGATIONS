import { ScrollView, Text } from 'react-native';

const courses = [
  { code: 'DCIT 324', title: 'Mobile App Development', credits: 3 },
  { code: 'DCIT 308', title: 'Data Structures and Algorithms II', credits: 3 },
  { code: 'STAT 313', title: 'Regression Analysis', credits: 3 },
  { code: 'STAT 322', title: 'Statistical Computing with R', credits: 3 },
  { code: 'DCIT 316', title: 'Software Development', credits: 3 },
];

export default function Courses() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {courses.map((c, i) => (
        <Text key={i} style={{ marginBottom: 10 }}>{c.code} — {c.title} ({c.credits} credits)</Text>
      ))}
    </ScrollView>
  );
}