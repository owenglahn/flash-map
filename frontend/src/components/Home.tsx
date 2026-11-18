import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HOST_URL } from "../config";
import UserSearch from "./UserSearch";
import { JWTToken } from "../App";
import { LoginButton } from "./LoginButton";

function Home() {
    const [users, setUsers] = useState([]);
    const { jwtToken, setJwtToken } = useContext(JWTToken);

    useEffect(() => {
        fetch(`${HOST_URL}/users`)
        .then(response => response.json())
        .then(json => {
            console.log(`Users: ${json}`);
            setUsers(json);
        })
        .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <h1>
                Flash Map!
            </h1>
            <br />
            <Link to={'/flashsheet'}>
                Flash sheet
            </Link>
            <UserSearch />
            <LoginButton />
        </div>
    );
}

export default Home;