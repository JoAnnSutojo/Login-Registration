import { Routes, Route } from 'react-router'

// Components
import Registration from './pages/registration';
import Login from './pages/login';

// Styles
import "./App.css";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
