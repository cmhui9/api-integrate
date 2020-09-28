import React from 'react';
import Users from './Users';
import { UsersProvider } from './UsersContext_bak';

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
