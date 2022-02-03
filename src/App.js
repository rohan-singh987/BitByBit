import './App.css';
import Navbar from './components/Navbar';
import Com1 from './components/Com1';
import Com2 from './components/Com2';
import Com3 from './components/Com3';
import Com4 from './components/Com4';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="">
      <Navbar />

      <Com1/>

      <Com2/>

      <Com3/>

      <Carousel/>

      <Com4/>

      <Footer/>
    </div>
  );
}

export default App;
