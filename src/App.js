import {ToastContainer} from "react-toastify"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Header from "./components/Header";
import BlogPost from "./components/BlogPost";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <ToastContainer/>
        <Routes>
          <Route path="/" elements={<Home/>}/>
          <Route path="/profile" elements={<Profile/>}/>
          <Route path="/blog-post" elements={<BlogPost/>}/>
          <Route path="/dashboard" elements={<Dashboard/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
