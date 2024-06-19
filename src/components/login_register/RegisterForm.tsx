import {Button, FormLabel, Image, Input} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../../common/models.ts";
import {registerClient} from "../../services/login-client.ts";
import './style.css';
import finallogo from "../../assets/logofinal.png";

const RegisterForm = () => {
    const { register, handleSubmit} = useForm();
    const [error,setError] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data: FieldValues) => {
        const user : IUser = {
            user_name: data.user_name,
            firstname: data.firstname,
            lastname : data.lastname,
            email: data.email,
            password: data.password
        }
        registerClient.post('',user)
            .then(res => {
                // const token = res.data.token;
                console.log('Logged token:', res.data.token);
                localStorage.setItem('token', res.data.token);
                toast.success('Successfully registered!');
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                setError('Registration failed')
            });
        navigate("/");
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className="wrapper">
            <div className="container">
                <Image src={finallogo} width={256} />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormLabel>Username</FormLabel>
                    <Input
                        {...register('user_name', {
                            required: "Username is required",
                            maxLength: {
                                value: 16,
                                message: "Username cannot exceed 16 characters"
                            }
                        })}
                        id='user_name'
                        type='text'
                    />
                    {/*{errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}*/}

                    <FormLabel>Firstname</FormLabel>
                    <Input
                        {...register('firstname', { required: true })}
                        id='firstname'
                        type='text'
                    />

                    <FormLabel>Lastname</FormLabel>
                    <Input
                        {...register('lastname', { required: true })}
                        id='lastname'
                        type='text'
                    />

                    <FormLabel>Email</FormLabel>
                    <Input
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        })}
                        id='email'
                        type='email'
                    />

                    <FormLabel>Password</FormLabel>
                    <Input
                        {...register('password', { required: true })}
                        id='password'
                        type='password'
                    />

                    <br /><br />
                    <center>
                        <Button type="submit">Register</Button>
                    </center>
                </form>
                <Link to="/login">User already? Login now</Link>
            </div>
        </div>
    );
};

export default RegisterForm;
