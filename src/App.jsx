import './App.css';
import React from 'react';
import Child from './react hooks/useContext/child';

export const UserContext = React.createContext(); // Export context

function App() {
  return (
    <UserContext.Provider value={{ text: 'It worked' }}> {/* Provide the context value */}
      <Child />
    </UserContext.Provider>
  );
}

export default App;
