import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';
import { useProfile } from '../../../contexts/ProfileContext';

export default function Profile() {
  const { profile } = useProfile();

  return (
    <View style={{ padding: 20 }}>
      <Text>Name: {profile.name}</Text>
      <Text>Index Number: {profile.indexNumber}</Text>
      <Text>Programme: {profile.programme}</Text>
      <Text>Level: {profile.level}</Text>
      <Text>Bio: {profile.bio}</Text>
      <Button
        title="Edit Profile"
        onPress={() =>
          router.push({
            pathname: '/edit-profile',
            params: { name: profile.name, bio: profile.bio, programme: profile.programme },
          })
        }
      />
    </View>
  );
}