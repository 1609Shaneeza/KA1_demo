import { BrowserRouter as Routes, Route } from "react-router-dom";
import CookieClicker from "./Components/CookieClicker";
import Homepage from "./Components/HomePage";
import Temperature from "./Components/TempChecker";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar";
import { COOKIE_COUNTER, TEMPERATURE, HOME, NOT_FOUND } from "./Constants/Constants";




export function App() {


  return (
    <>
    <Navbar/>

    <Routes>
      <Route path={HOME} index element={<Homepage/>}/>
      <Route path={COOKIE_COUNTER} element={<CookieClicker/>}/>
      <Route path={TEMPERATURE} element={<Temperature/>}/>
      <Route path={NOT_FOUND} element={<NotFound/>}/>
    </Routes>

    </>
  )
}

export default App;
