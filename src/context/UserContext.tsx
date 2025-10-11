// src/context/UserContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/firebase'; // Import auth from your firebase.ts
import { User, onAuthStateChanged } from 'firebase/auth'; // Import User type and onAuthStateChanged

interface UserContextType {
  user: User | null;
  loading: boolean;
  userType: 'face' | 'creator' | 'brand' | null; // Custom user type
  setUserType: (type: 'face' | 'creator' | 'brand' | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState<'face' | 'creator' | 'brand' | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // You might load userType from Realtime DB here if stored with user profile
      // For now, we'll rely on explicit setting after sign-in/sign-up
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
