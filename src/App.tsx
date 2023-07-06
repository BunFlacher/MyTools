import {Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='calculator' element={<Calculator/>}/>
      </Routes>
    </div>
  );
}

export default App;
