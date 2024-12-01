import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/sections/banner/Banner';
import Whyus from './components/sections/whyus/Whyus';
import Services from './components/sections/our_services/Services';
import FollowUs from './components/sections/follow_us/FollowUs';
import Testimonials from './components/sections/google_testimonials/Testimonials';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Banner />
      <Whyus />
      <Services />
      <FollowUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;