import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";
import UserSearch from "./UserSearch";

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/users`)
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
        </div>
    );
}

export default Home;