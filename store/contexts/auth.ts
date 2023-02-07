import { createContext } from 'react';

const authContext = createContext({
  user: null,
  setUser: null,
});

export default authContext;