
import './App.css';
import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
<Layout/>

<Cards/>
<About/>

<Footer/>
    </div>
  );
}

export default App;
