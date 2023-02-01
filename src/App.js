import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
