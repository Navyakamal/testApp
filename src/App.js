import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Header></Header>
        
        <Routes>
          <Route path='/' element={<Landing></Landing>}></Route>
        </Routes>   
 
    </div>
  );
}

export default App;
