//import logo from './logo.svg';
import { blue } from '@mui/material/colors';
import './App.css';
import { Container, Typography } from "@mui/material";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
/*function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
export default function MyApp() {
  return (
    <div> 
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  )
}
  */
function App() {
  return <Container sx={{ bgcolor: "blue", height: "100vh" }}>
    <Typography variant='h1'>Hello World!</Typography></Container>
}
export default App;