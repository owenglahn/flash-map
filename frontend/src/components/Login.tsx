import {useForm} from "react-hook-form";
import PropTypes from 'prop-types';

type TokenProps = {
    setToken: (token: string) => void;
};

function Login({ setToken }: TokenProps) {
    type LoginFormInputs = {
        username: string;
        password: string;
    };
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormInputs>();

    const onSubmit = () => {
    };
    
    return(
        <div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-wrapper"
                    type="username"
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