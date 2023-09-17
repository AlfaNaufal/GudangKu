import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pinjam from "./components/Pinjam";
import DataPinjam from "./components/DataPinjam";
import Riwayat from "./components/Riwayat";


const App = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinjam" element={<Pinjam />} />
        <Route path="/dataPinjam" element={<DataPinjam />} />
        <Route path="/riwayat" element={<Riwayat />} />
      </Routes>
   </Router>
   
  )
}

export default App;