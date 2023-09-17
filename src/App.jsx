import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Pinjam from "./components/Pinjam";


const App = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pinjam" element={<Pinjam />} />
      </Routes>
   </Router>
   
  )
}

export default App;