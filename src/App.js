import logo from './logo.svg';
import './App.css';

// App is a Component
// Components are functions that return JSX
//
function App() {
  let name = 'Zack'; // we can use {} similar to ${} and fill inside

  let myH1 = <h1> Go home, {name}, you're drunk!!! </h1>; // {name}

  // "HTML" is actually "JSX"
  // "JavaScript extended"
  // as in App.jsx

  // client side (react) we'll do:
  import HelloCullen from './HelloCullen';

  return (
    <div className="App">
      {myH1}

      {/*Hello Cullen is a React component*/}
      <HelloCullen />
      <HelloCullen />


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

export default App;
