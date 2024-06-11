import {Button, FormControl, FormLabel, Image, Input} from "@chakra-ui/react";
import chicken from '../../assets/logo.jpg';
import {FieldValues, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {ILogin} from "../../common/models.ts";
import {loginClient} from "../../services/login-client.ts";
import toast from "react-hot-toast";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const linkStyle = {
        color: isHovered ? "blue" : "black",
        textDecoration: isHovered ? "underline" : "none",
        cursor: "pointer"
    };

    const onSubmit = async (data: FieldValues) => {
        const login:ILogin = {
            email: data.email,
            password: data.password
        }

        loginClient.post('', login)
            .then(res => {
                console.log('Logged token:', res.data.token);
                localStorage.setItem('token', res.data.token);
                toast.success('Successful login!');
                navigate('/');
            })
            .catch(err => {
                console.log(err)
                setError('Invalid username or password')
            })

        // try {
        //     const response = await axios.post('http://localhost:8080/auth/authenticate', data);
        //     const token = response.data.token;
        //     console.log('Logged token:', token);
        //     localStorage.setItem('token', token); // Optionally save the token in localStorage
        //     navigate('/'); // Redirect after successful login
        // } catch (error) {
        //     setError('Invalid username or password');
        // }
    };

    return (
        <div>
            <Image src={chicken} width={256} />
            <br/>
            <div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        })}
                        id='email'
                        type='email'
                    />

                    <FormControl isInvalid={!!errors.password}>
                        <FormLabel>Password</FormLabel>
                        <Input
                            {...register('password', { required: true })}
                            id='password'
                            type='password'
                        />
                    </FormControl>
                    <br /><br />
                    <center>
                        <Button type='submit'>Login</Button>
                    </center>
                </form>
                <br />
                <a style={linkStyle} onClick={() => navigate("/register")}
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}>
                    Not a member yet? Register now</a>
            </div>
        </div>
    );
};

export default LoginPage;
