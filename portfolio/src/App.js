import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
      <br></br>
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
