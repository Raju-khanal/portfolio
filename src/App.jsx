import { Route, Routes } from "react-router-dom"
import Service from "./pages/Service"
import About from "./pages/About"
import Home from "./Home/Home"
import Nav from "./pages/Nav"
import Hire from "./pages/Hire"
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />

      </Routes>
    </div>
  )
}
export default App;