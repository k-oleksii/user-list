import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type UserSearchContextType = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

export const Context = createContext<UserSearchContextType | undefined>(
  undefined
);

export const UserSearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const contextValue: UserSearchContextType = {
    searchQuery,
    setSearchQuery,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
