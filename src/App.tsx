import LoginPage from "./components/login_register/LoginPage.tsx";
import MainPage from "./components/Mainsite/MainPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FooterComponent from "./components/FooterComponent.tsx";
import RegisterForm from "./components/login_register/RegisterForm.tsx";
import Impressum from "./components/Impressum.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import NavBar from "./components/Navbar/NavBar.tsx";
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/login" element={
                <LoginPage/>
            }></Route>
            <Route path="/" element={
                <ProtectedRoute>
                    <MainPage/>
                </ProtectedRoute>
            }></Route>
            <Route path="/register" element={
                <RegisterForm/>
            }></Route>
            <Route path="/imprint" element={
                <Impressum/>
            }></Route>
        </Routes>
        <FooterComponent/>
    </BrowserRouter>
  )
}

export default App;
