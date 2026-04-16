import {useForm} from "react-hook-form";
import PropTypes from 'prop-types';

type TokenProps = {
    setToken: (token: string) => void;
};

function Signup({ setToken }: TokenProps) {
    type LoginFormInputs = {
        username: string;
        password: string;
        confirmPassword: string;
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm<LoginFormInputs>();

    const onSubmit = () => {
    };
    
    return(
        <div>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="username"
                    {...register("username", { required: true })}
                    placeholder="Username"
                    className="input-wrapper"
                />
                {errors.username && <span style={{ color: "red" }}>Username is mandatory</span>}
                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Create new password"

                />
                {errors.password && <span style={{ color: "red" }}>Password is mandatory</span>}
                <input
                    type="password"
                    {...register("confirmPassword", { required: true, 
                        validate: (val: string) => watch('password') === val
                    })}
                    placeholder="Confirm password"
                />
                {errors.confirmPassword && <span style={{ color: "red" }}>Passwords must match</span>}
                <input className="login-btn" type="submit" style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </div>
    );
}

Signup.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Signup;