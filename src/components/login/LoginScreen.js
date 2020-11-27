import React from 'react'
import GoogleLogin from 'react-google-login';

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/');
        history.replace('/');
    }

    const respuestaGoogle = (respuesta) => {
        console.log(respuesta);
    }

    return (
        <div className="container mt-5">
            <div>
                <GoogleLogin
                    clientId="602152066446-56tpoi2kmi0vfeebndmsq624cs7ert3o.apps.googleusercontent.com"
                    buttonText="Iniciar Sesión"
                    onSuccess={respuestaGoogle}
                    onFailure={respuestaGoogle}
                    cookiePolicy={'single_host_origin'}
                />
        </div>
        <br/><br/>

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Volver a super Heroes
            </button>

        </div>
    )
}
