// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro'
import Introsecond from './components/Introsecond';
import First from './components/First';
import ApiData from './components/ApiData';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
      {/* <Intro/>
      <Introsecond/> */}
      {/* <h1>This is intro</h1>
      <h3>This is second intro</h3> */}
      {/* <First/> */}
      {/* <ApiData/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiData />} />
          <Route path="/intro" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;