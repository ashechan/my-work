import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbar />
    <Portfolio />
    <Footer />
   
    </>
  );
}

export default App;
