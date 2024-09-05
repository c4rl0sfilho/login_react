import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from 'react'
import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log("teste", setUsername, setPassword);


        console.log("Envio");
    }

    return (
        <div className='Container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div>
                    <input 
                    type="email" 
                    placeholder='email' 
                    onChange={(e) => setUsername(e.target.value)} 
                    />
                    <FaUser />
                </div>
                <div>
                    <input 
                    type="password" 
                    placeholder='password' 
                    />
                    <FaLock />
                </div>

                <div className="recall-forget">
                    <label >
                        <input type="checkbox" />
                        Lembre de mim
                        <a href="#">Esqueceu a Senha</a>
                    </label>
                </div>
                <button>Entrar</button>
                <div className="signup-link">
                    <p>
                        Não tem conta? <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
