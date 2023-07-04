import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
import GoogleMap from "./components/googlemaps";
function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
      <GoogleMap />
    </>
  );
}

export default App;