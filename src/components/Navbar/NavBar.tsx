import './NavBarCSS.css';
import toast, {Toaster} from "react-hot-toast";
import {Flex, Heading, Spacer} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import { IoLogOutOutline } from "react-icons/io5";


const NavBar = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setLoggedIn(!token)
    },[]);

    const removeToken = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    }

    return (
        <div className="navbar">
            <div><Toaster
                position="top-center"
                reverseOrder={false}/>
            </div>
            <Flex padding={5}>
                <Heading><a href="/">RiskyRoads</a></Heading>
                <Spacer/>
                {!loggedIn ? <><button style={{fontSize: '36px'}}
                                       onClick={() => {removeToken(); toast.error('logged out!'); navigate('/login')}}>
                    <IoLogOutOutline/></button></>
                    : <></>}
            </Flex>
        </div>
        );
};

export default NavBar;