import { Aboutus } from "./pages/AboutUs"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import { ContactUs } from "./pages/Contacus";

function App() {

  return (
    <>  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Aboutus/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
      </Routes>
    
    </BrowserRouter>
       
    </>
  )
}

export default App
