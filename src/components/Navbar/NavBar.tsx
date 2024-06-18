import './NavBarCSS.css';
import {Toaster} from "react-hot-toast";
import {Flex, Heading, Spacer} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { IoLogOutOutline } from "react-icons/io5";


const NavBar = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(()=>{
            const token = localStorage.getItem('token');
            setLoggedIn(!!token)
        },3000)
    },[]);

    const removeToken = () => {
        localStorage.removeItem('token');
    }

    return (
        <div className="navbar">
            <div><Toaster
                position="top-center"
                reverseOrder={false}/>
            </div>
            <Flex padding={5}>
                <Heading fontSize={30} padding={2} fontFamily={"Poppins, sans-serif"}><a href="/">RiskyRoads</a></Heading>
                <Spacer/>
                {loggedIn ? <><button onClick={() => {removeToken(); navigate('/login')}}>Log out <IoLogOutOutline/></button></>
                    : <button style={{marginTop : 1}} onClick={() => navigate('/login')}>Log in</button>}
            </Flex>
        </div>
        );
};

export default NavBar;