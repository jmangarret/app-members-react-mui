import * as React from 'react';

import Container from '@mui/material/Container';
import SignIn from './components/SignIn';
import Member from './layouts/Member';

function App() {
  const [isLogged, setIsLogged] = React.useState(false);

  const handleLogin = (status) => {
    setIsLogged(status);
  };
  return (
    <div className="App">
      <Container component="main" maxWidth="md">
        {
          isLogged ? 
          <Member handleLogin={handleLogin}/> :
          <SignIn handleLogin={handleLogin}/>
        }
      </Container>      
    </div>
  );
}

export default App;
