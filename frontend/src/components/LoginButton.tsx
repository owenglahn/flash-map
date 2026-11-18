import { useContext } from "react";
import { JWTToken } from "../App";

export function LoginButton() {
    const { jwtToken  } = useContext(JWTToken);
    if (jwtToken) {
        return <></>;
    }
    return (
        <div>
            <a href="/login">Login</a>
        </div>
    );
}