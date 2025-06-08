
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
}

interface UpdateProfileData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  currentPassword?: string;
  newPassword?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (data: UpdateProfileData) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('ppn_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call - replace with actual Django backend call later
    setIsLoading(true);
    
    // Mock validation
    if (email && password.length >= 6) {
      const mockUser = {
        id: '1',
        email,
        name: email.split('@')[0],
        phone: '',
        address: ''
      };
      
      setUser(mockUser);
      localStorage.setItem('ppn_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call - replace with actual Django backend call later
    setIsLoading(true);
    
    if (name && email && password.length >= 6) {
      const mockUser = {
        id: Date.now().toString(),
        email,
        name,
        phone: '',
        address: ''
      };
      
      setUser(mockUser);
      localStorage.setItem('ppn_user', JSON.stringify(mockUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const updateProfile = async (data: UpdateProfileData): Promise<boolean> => {
    // Simulate API call - replace with actual Django backend call later
    setIsLoading(true);
    
    try {
      if (!user) {
        setIsLoading(false);
        return false;
      }

      // In a real app, you would validate the current password here
      if (data.currentPassword && data.newPassword) {
        // Mock password validation
        if (data.currentPassword.length < 6) {
          setIsLoading(false);
          return false;
        }
      }

      const updatedUser = {
        ...user,
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        address: data.address || ''
      };
      
      setUser(updatedUser);
      localStorage.setItem('ppn_user', JSON.stringify(updatedUser));
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ppn_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
