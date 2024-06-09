import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
