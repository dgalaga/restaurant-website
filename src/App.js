import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import GoogleMap from "./components/googlemaps";
function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Routing />
      <Footer />
      <GoogleMap />
    </>
  );
}

export default App;