import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
      <br></br>
      <Home />
      {/* 
      <Education />
      <Experience />
      <Works/> 
      <Contact/>*/}
      <Footer />
    </div>
  );
}

export default App;
