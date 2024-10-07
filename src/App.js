import  "./index"
import Footer from "./Components/Footer/Footer";
import Generator from "./Components/Generator/Generator";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[#03101e] flex flex-col">
      <Navbar />
      <Generator />
      {/* <Footer /> */}
    </div>
  );
}

export default App;