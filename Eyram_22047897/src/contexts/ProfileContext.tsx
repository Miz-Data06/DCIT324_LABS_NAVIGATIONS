import React, { createContext, useContext, useState } from 'react';

type Profile = {
  name: string;
  indexNumber: string;
  programme: string;
  level: string;
  bio: string;
};

const defaultProfile: Profile = {
  name: 'Ama Serwaa',
  indexNumber: '10912345',
  programme: 'BSc Computer Science',
  level: '300',
  bio: 'Aspiring data analyst, loves Highlife music.',
};

const ProfileContext = createContext<{
  profile: Profile;
  setProfile: (p: Profile) => void;
}>({ profile: defaultProfile, setProfile: () => {} });

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile>(defaultProfile);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);