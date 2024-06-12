import './Main.css'
import LogoutButton from "../LogoutButton.tsx";
import {useEffect, useState} from "react";
import {apiClient} from "../../services/api-client.ts";

const MainPage = () => {
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState('');

    useEffect(() => {
        const getUsername = async () => {
            apiClient.get('/user')
                .then(res => {
                    setUsername(res.data);
                    console.log(res)
                })
                .catch(err => {
                    console.log(err);
                    setError('Username not available')
                })
        };
        getUsername();
    }, []);
    return (
        <div className="container">
            <LogoutButton/>
            {username ? <div>Welcome, {username}</div> : <div>{error}</div>}
            <iframe
                className="iframe"
                src="https://example.com"
                title="Game">
            </iframe>
        </div>
    );
};

export default MainPage;