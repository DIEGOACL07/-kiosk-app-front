import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../conponents/Alerta";

export default function Registro() {
    
    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const {errores, setErrores} = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        
        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: nameRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        try {
            const respuesta = await clienteAxios.post('/api/registro', datos)
            console.log(respuesta);
        } catch (error) {
            setErrores(Object.values(error.response.data.errors));
        }
    }

    return (
        <>
            <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
            <p>Crea tu cuenta</p>
            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form
                onSubmit={handleSubmit}
                noValidate
                >
                    {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
                    
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="name">Nombre:</label>
                        <input
                        type="text"
                        id="name"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="name"
                        placeholder="Tu Nombre"
                        ref={nameRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">Email:</label>
                        <input
                        type="email"
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="Tu Email"
                        ref={emailRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password">Password:</label>
                        <input
                        type="password"
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="Tu Password"
                        ref={passwordRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password_confirmation">Confirmation:</label>
                        <input
                        type="password"
                        id="password_confirmation"
                        className="mt-2 w-full p-3 bg-gray-50"
                        name="password_confirmation"
                        placeholder="Tu Password"
                        ref={passwordConfirmationRef}
                        />
                    </div>
                    <input
                    type="submit"
                    value="Crear"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white  w-full mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
            <nav className="mt-5">
            <Link to="/auth/login">Inicia Sesion</Link>
        </nav>
        </>
    )
}