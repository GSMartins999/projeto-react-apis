import { createGlobalStyle } from 'styled-components';
import { Router } from './Router/Router';


const GlobalStyle  = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }
`

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router/>
    </>
  );
}

export default App;
