import './App.css'
import Home from './HomePage/Home';
import EditList from './HomePage/EditList';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editlist" element={<EditList />}/>
      </Routes>
    </div>
      
  );
}

export default App;