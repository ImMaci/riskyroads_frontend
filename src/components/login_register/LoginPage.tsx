import {Button, FormControl, FormLabel, Image, Input} from "@chakra-ui/react";
import finallogo from '../../assets/logofinal.png';
import {FieldValues, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {ILogin} from "../../common/models.ts";
import {loginClient} from "../../services/login-client.ts";
import toast from "react-hot-toast";
import './style.css';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data: FieldValues) => {
        const login:ILogin = {
            email: data.email,
            password: data.password
        }

        loginClient.post('', login)
            .then(res => {
                console.log('Logged token:', res.data.token);
                localStorage.setItem('token', res.data.token);
                toast.success('Successfully logged in!');
                navigate('/');
            })
            .catch(err => {
                console.log(err)
                setError('Invalid username or password')
            })
    };

    return (
        <div className="wrapper">
            <div className="container">
                <Image src={finallogo} width={256} />
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
                    <a href="/register">Not a member yet? Register now</a>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
