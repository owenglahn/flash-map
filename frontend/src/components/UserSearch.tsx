import { ChangeEvent, useState } from "react";
import { getSimilarUsers } from "../services/users";

function UserSearch() {
    const [users, setUsers] = useState([]);
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
        </>
    );
}

export default UserSearch;