import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useProfile } from '../contexts/ProfileContext';

export default function EditProfile() {
  const params = useLocalSearchParams<{ name?: string; bio?: string; programme?: string }>();
  const { setProfile, profile } = useProfile();

  const [name, setName] = useState(params.name ?? profile.name);
  const [bio, setBio] = useState(params.bio ?? profile.bio);
  const [programme, setProgramme] = useState(params.programme ?? profile.programme);

  const handleSave = () => {
    setProfile({ ...profile, name, bio, programme });
    router.back();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Bio</Text>
      <TextInput value={bio} onChangeText={setBio} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Programme</Text>
      <TextInput value={programme} onChangeText={setProgramme} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}