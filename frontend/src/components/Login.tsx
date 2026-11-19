import {useForm} from "react-hook-form";
import PropTypes from 'prop-types';
import { postLogin } from "../services/auth";
import { useContext } from "react";
import {JWTToken} from "../App";
import { useNavigate } from "react-router-dom";

type TokenProps = {
    setToken: (token: string) => void;
};

function Login({ setToken }: TokenProps) {
    const { jwtToken, setJwtToken } = useContext(JWTToken);
    const navigate = useNavigate();

    type LoginFormInputs = {
        username: string;
        password: string;
    };
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormInputs>();

    const onSubmit = async (data: LoginFormInputs) => {
        postLogin(data.username, data.password)
        .then(data => data.json())
        .then(data => {
            setJwtToken(data.token);
            navigate("/");
        });
    };
    
    return(
        <div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-wrapper"
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="Username"
                />
                {errors.username && <span style={{ color: "red" }}>Username is mandatory</span>}
                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                />
                {errors.password && <span style={{ color: "red" }}>Password is mandatory</span>}
                <input className="login-btn" type="submit" style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;