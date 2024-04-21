import NavBar from './Components/NavBar';
import Header from './Components/Header';
import OnlineMenu from "./Components/OnlineMenu"
import Testimonial from './Components/Testimonial';
import LittleLemonStory from './Components/LittleLemonStory';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <OnlineMenu />
      <Testimonial />
      <LittleLemonStory />
      <Footer />
    </div>
  );
}

export default App;
