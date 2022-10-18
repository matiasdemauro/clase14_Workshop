import React, { useEffect, useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import "./styles.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContainer = ({ handleClose, login, signUp }) => {
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [dismounting, setDismounting] = useState(false);

    useEffect(() => {
        if (dismounting) {
            setTimeout(() => {
                handleClose();
            }, 300);
        }
    }, [dismounting, handleClose]);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log('uid', uid);
            } else {

                toast('No hay usuario logeado', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        });
    }, []);

    const handleLogin = () => {
        if (login) {
            //Login logic
            if (email === "") {
                toast('Se necesita un mail', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setErrorEmail("Se necesita un mail");

                return;
            }
            if (password === "") {
                toast('Se necesita una contraseña', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setErrorPassword("Se necesita una contraseña");

                return;
            }

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log('email de indentificacion:', user.email);
                    toast('Bienvenido/a  ' + user.email, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setEmail(user.email);
                })
                .catch((error) => {
                    //aca meto el toastify de error "ingrese un usuario valido"
                    toast('Ingrese un usuario válido', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                });

            setErrorEmail("");
            setErrorPassword("");
        } else {
            //Signup logic
            if (email === "") {
                setErrorEmail("Campo obligatorio");
                return;
            }
            if (password === "") {
                setErrorPassword("Campo obligatorio");
                return;
            }
            if (confirmPassword !== password) {
                setErrorConfirmPassword("Deben coincidir las contraseñas");
                return;
            }
            setErrorEmail("");
            setErrorPassword("");
            setErrorConfirmPassword("");
            setLoading(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then(() => {
                    // Signed in
                    toast('Se registro correctamente', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });


                })
                .catch((error) => {
                    toast('Error al registrarse, intente nuevamente', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);

                })
                .finally(() => {
                    setLoading(false);
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                });
        }
    };

    return (
        <div className="form-container">
            <div className={!dismounting ? "form" : "form-dismount"}>
                <h2>{login ? "Login" : "Signup"}</h2>
                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            alignItems: "center",
                        }}
                    >
                        <CircularProgress />
                    </div>
                ) : (
                    <>

                        <TextField
                            color="primary"
                            onChange={(e) => setEmail(e.target.value)}
                            error={errorEmail !== ""}
                            helperText={errorEmail}
                            value={email}
                            type="email"
                            required={true}
                            placeholder="Ingrese e-mail"
                        />
                        <TextField
                            color="primary"
                            onChange={(e) => setPassword(e.target.value)}
                            error={errorPassword !== ""}
                            value={password}
                            helperText={errorPassword}
                            type="password"
                            placeholder="Ingrese contraseña"
                            required={true}
                        />
                        {signUp && (
                            <TextField
                                color="primary"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                error={errorConfirmPassword !== ""}
                                value={confirmPassword}
                                helperText={errorConfirmPassword}
                                type="password"
                                placeholder="Confirme la contraseña"
                                required={true}
                            />
                        )}
                        <div className="buttons-login-container">
                            <Button onClick={handleLogin} variant="contained">
                                {login ? "Login" : "Signup"}
                            </Button>
                            <Button
                                onClick={() => setDismounting(true)}
                                variant="outline"
                            >
                                Close
                            </Button>
                            <ToastContainer />
                        </div>

                    </>
                )}
            </div>
        </div>
    );
};

export default AuthContainer;