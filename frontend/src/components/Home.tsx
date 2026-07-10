import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

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
            <h2>
                Tattoo Artists
            </h2>
            {users.map((user) => <li><Link to={"/"}>{user}</Link></li>)} 
            <br />
            <Link to={'/flashsheet'}>
                Flash sheet
            </Link>
        </div>
    );
}

export default Home;