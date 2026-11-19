import { ChangeEvent, useEffect, useState } from "react";
import { getSimilarUsers } from "../services/users";
import { Link } from "react-router-dom";

function UserSearch() {
    const [users, setUsers] = useState<any[]>([]);
    const [key, setKey] = useState<string>('');
    // replace await with loading -> show users
    useEffect(() => {
        if (!key) {
            setUsers([]);
            return;
        }
        getSimilarUsers(key).then(data => setUsers(data))
    }, [key]);
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const query = formData.get("query");
            }}>
                <input type="text" value={key} placeholder="Search Users" onChange={(e) => {
                    setKey(e.target.value);
                }} />
                <button type="submit">Search</button>
            </form>
            {users.map((user) => {
                console.log(user.username);
                return (
                    <div>
                        <Link to={`/users/${user.username}`}>{user.username}</Link><br></br> 
                    </div>
                );
            })} 
        </>
    );
}

export default UserSearch;