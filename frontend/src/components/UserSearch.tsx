import { ChangeEvent, useState } from "react";
import { getSimilarUsers } from "../services/users";
import { Link } from "react-router-dom";

function UserSearch() {
    const [users, setUsers] = useState<any[]>([]);
    const [key, setKey] = useState<string>('');
    async function search() {
        setUsers(await getSimilarUsers(key));
        console.log(users);
    }
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
                    search();
                }} />
                <button type="submit">Search</button>
            </form>
            {users.map((user) => {
                console.log(user.username);
                return (
                    <div>
                        <Link to="/flashsheet">{user.username}</Link><br></br> 
                    </div>
                );
            })}
        </>
    );
}

export default UserSearch;