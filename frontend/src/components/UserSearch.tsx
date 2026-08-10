import { ChangeEvent, useState } from "react";
import { getSimilarUsers } from "../services/users";

function UserSearch() {
    const [users, setUsers] = useState([]);
    async function search(e: ChangeEvent) {
        const key = e.currentTarget.getAttribute("value");
        if (key) {
            setUsers(await getSimilarUsers(key));
        }
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
                <input type="text" placeholder="Search Users" onChange={search} />
                <button type="submit">Search</button>
            </form>
        </>
    );
}

export default UserSearch;