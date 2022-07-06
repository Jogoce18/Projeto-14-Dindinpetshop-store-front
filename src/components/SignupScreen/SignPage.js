import styled from "styled-components";
import AuthScreen from "../shared/AuthScreen";
import React, { useState, useEffect } from 'react';
import {  useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import dotenv from 'dotenv';
dotenv.config();

const Register = () => {
	const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: false,
    });
    const [buttonCadastrar, setButtonCadastrar] = useState({
        disabled: true,
        classNameDisabled: 'button-disabled',
    });
    const [dataLoading, setDataLoading] = useState({
        loading: false,
        classNameLoading: '',
    });

    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();

        setDataLoading({
            ...dataLoading,
            loading: true,
            classNameLoading: 'input-disabled',
        });

        const URL = "https://dindinpetshop.herokuapp.com/signup";

        axios
            .post(URL, {
                name: data.name,
                email: data.email,
                password: data.password,
                confirmPassword: data.confirmPassword,
            })
            .then((res) => {
                console.log(res.data);
                setDataLoading({
                    ...dataLoading,
                    loading: false,
                    classNameLoading: '',
                });
                navigate('/');
            })
            .catch((err) => {
                console.log({
                    message:
                        'Sign Up error! Check your credentials and try again',
                    err,
                });
                setDataLoading({
                    ...dataLoading,
                    loading: false,
                    classNameLoading: '',
                });
            });
    };

    useEffect(() => {
        if (
            data.confirmPassword !== '' &&
            data.password !== data.confirmPassword
        ) {
            setData({
                ...data,
                error: true,
            });
            setButtonCadastrar({
                ...buttonCadastrar,
                disabled: true,
                classNameDisabled: 'button-disabled',
            });
        } else if (
            data.confirmPassword !== '' &&
            data.confirmPassword === data.password
        ) {
            setData({
                ...data,
                error: false,
            });
            setButtonCadastrar({
                ...buttonCadastrar,
                disabled: false,
                classNameDisabled: '',
            });
        }
    }, [data.confirmPassword, data.password]);

  
	return (
		<AuthScreen>
			<Title>CREATE AN ACCOUNT</Title>
			<Form onSubmit={signUp}>
				<Input placeholder="Name"
				 type="text"
                disabled={dataLoading.loading}
                className={dataLoading.classNameLoading}
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })} />

				

				<Input placeholder="E-mail" 
				type="email"
				disabled={dataLoading.loading}
				className={dataLoading.classNameLoading}
				required
				value={data.email}
				onChange={(e) =>
					setData({ ...data, email: e.target.value })
				}
				 />
				<Input 
				type="password"
				disabled={dataLoading.loading}
				className={dataLoading.classNameLoading}
				placeholder="Senha"
				required
				value={data.password}
				onChange={(e) =>
					setData({
						...data,
						password: e.target.value,
					})
				} />
				<Input placeholder="Confirm password"
				     type="password"
					 disabled={dataLoading.loading}
					 className={dataLoading.classNameLoading}
					 required
					 value={data.confirmPassword}
					 onChange={(e) =>
						 setData({
							 ...data,
							 confirmPassword: e.target.value,
						 })
					 } />

				{data.error ? (
                    <span className="text-danger">Passwords dont match</span>
                ) : null}
					<Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                   </Agreement>
                {dataLoading.loading === false ? (
				
                     <Button
					 type="submit"
					 disabled={buttonCadastrar.disabled}
					 className={buttonCadastrar.classNameDisabled}
				 >
					 CREATE
				 </Button>
                ) : (
					
					<Button type="button" disabled>
					<ThreeDots
						color="rgba(255, 255, 255, 1)"
						height={13}
						width={51}
					/>
				    </Button>
				    
                )}
				
			  
			</Form>
			<Link to="/">
                <Cadastro>Já tem uma conta? Faça login!</Cadastro>
          </Link>
		</AuthScreen>
	);
};

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;
const Cadastro = styled.p`
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #FFFFFF;
    text-decoration: underline;
    
`;


export default Register;
