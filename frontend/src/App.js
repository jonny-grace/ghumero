import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import { useSelector } from 'react-redux';
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import ProtectedPage from "./Pages/protectedPage";
import NotFound from "./Pages/notFound";
import Spinner from "./Pages/Spinner";
import SelectedItem from "./Pages/SelectedItem";
import Profile from "./Pages/Profile";
import SecureCheckout from "./Pages/SecureCheckout";
import SecurePay from "./Pages/SecurePay";
import SecurePayConfirm from "./Pages/SecurePayConfirm";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Destination from "./Components/Destination";
import AllDestination from "./Pages/AllDestination";
import DrawerAppBar from "./Components/Navbar/DrawerAppBar";

function App() {
  const { loading }  = useSelector(state => state.loaders)

  return (
    <div className="App">
      {loading && <Spinner/>}
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<ProtectedPage><LandingPage/> </ProtectedPage>}/>
        {/* <Route path='/login' element={<ProtectedPage><Login/> </ProtectedPage>}/> */}
        {/* <Route path='/register' element={<ProtectedPage><Register/> </ProtectedPage>}/> */}
        <Route path='/aboutus' element={<ProtectedPage><AboutUs/> </ProtectedPage>}/>
        <Route path='/contactus' element={<ProtectedPage><ContactUs/> </ProtectedPage>}/>
        <Route path='/destinations' element={<ProtectedPage><AllDestination/> </ProtectedPage>}/>
        <Route path='/select' element={<ProtectedPage><SelectedItem/> </ProtectedPage>}/>
        <Route path='/profile' element={<ProtectedPage><Profile/> </ProtectedPage>}/>
        <Route path='/search/:location?/:name?/:activity?' element={<ProtectedPage><Search/> </ProtectedPage>}/>
        <Route path="/securecheckout" element={<SecureCheckout /> } />
        <Route path="/securepay" element={<ProtectedPage><SecurePay /></ProtectedPage> } />
        <Route path="/securepayconfirm" element={<SecurePayConfirm /> } />
        <Route path="/nav" element={<DrawerAppBar /> } />
        

        <Route path="*" element={<ProtectedPage><NotFound /></ProtectedPage> } />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
