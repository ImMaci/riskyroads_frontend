import './Main.css'
import {useEffect, useState} from "react";
import {apiClient} from "../../services/api-client.ts";

const MainPage = () => {
    const [, setError] = useState('');

    useEffect(() => {
        setTimeout(()=>{
            const token = localStorage.getItem('token');

            apiClient.get('/user',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
                })
                .then(res => {
                    localStorage.setItem("playername", res.data);
                    console.log(res)
                    console.log("123")
                })
                .catch(err => {
                    console.log(err);
                    setError('Username not available')
                })
        },3000)
    },[]);

    return (
        <div className="iframe-wrapper">
            {/*{error && <p style={{ color: 'red' }}>{error}</p>}*/}
            <iframe
                className="iframe"
                src="/game_demo.html"
                title="Game">
            </iframe>
        </div>
    );
};

export default MainPage;