import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/sections/banner/Banner';
import Whyus from './components/sections/whyus/Whyus';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Whyus />
      <Footer />
    </div>
  );
}

export default App;