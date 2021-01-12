import React, { useState, useContext , useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


    toast.configure()
        const Login = (props) => {
            const [login, setstate] = useState();
            const url = 'http://127.0.0.1:8000/api/login';  
            const change = (e) => {

                setstate({
                    ...login,
                    [e.target.name]: e.target.value
                })
            }
            const add = async (object) => {
        
                try {
                    const { data } = await Axios.post(url, object);
                    localStorage.setItem('token',data.token);
                    toast.success(data.message);
                    setstate(data);
                    console.log(data.success);
                    if (data.success == true) {
                    setTimeout(function () {
                        props.history.push("/home");
                    }, 1000);
                    }
                    

                } catch (error) {
                    setstate(error.response.data);
                    toast.error(error.response.data.message);

                }
                
                

            }
            const send = (e) => {
                e.preventDefault();
                add(login);
        

            }

    return (
        <div className="Login">
            <div className="Login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <img
                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                    alt=""
                />
            </div>
            <div className="Login__form">
                <form class="form" action="http://127.0.0.1:8000/api/login" method="POST">
                    <input class="input" name="email" placeholder="Email Address or phone number" onChange={change} ></input>
                    <input type="password" class="input" name="password" placeholder="password" onChange={change} ></input>
                    <button class="btn" type="submit" onClick={send}>
                        Sign-in
                    </button>
                </form>
            </div>
            
            
        </div>
    )
}


export default Login;
