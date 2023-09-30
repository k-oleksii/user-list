// Core
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

interface IUserSearchContext {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export const Context = createContext<IUserSearchContext | undefined>(undefined);

export const UserSearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const contextValue: IUserSearchContext = {
    searchQuery,
    setSearchQuery,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
