import React, { ReactNode, createContext } from 'react';
import { useUserInput } from '../Containers/UserInput/useUserInput';

interface QueryContextProviderProps {
  children: ReactNode;
}

// Add handleInputChange to the context
export const UserSearchContext = createContext<{ query: string, handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void }>({ query: '', handleInputChange: () => {} });

export const QueryContextProvider: React.FC<QueryContextProviderProps> = ({ children }) => {
  const { query, handleInputChange } = useUserInput(); // Get handleInputChange from useUserInput

  return (
    <UserSearchContext.Provider value={{ query, handleInputChange }}> {/* Provide handleInputChange */}
      {children}
    </UserSearchContext.Provider>
  );
};