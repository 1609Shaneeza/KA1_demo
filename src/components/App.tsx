import { Routes, Route } from "react-router-dom";
import Navbar from "./Icons";
import { HOME, CONTACTUS, NEWS, NOT_FOUND } from "../Constants/Constants";
import DoggImage from "./Images";
import ContactUs from "./ContactUs";
import News from "./News";
import NotFound from "./PageNotFound";

function App() {
return(
    <>
    <Navbar/>

    <Routes>
      <Route path={HOME} index element={<DoggImage/>}/>
      <Route path={CONTACTUS} element={<ContactUs/>}/>
      <Route path={NEWS} element={<News/>}/>
      <Route path={NOT_FOUND} element={<NotFound/>}/>
    </Routes>

    </>
);

}

export default App;
