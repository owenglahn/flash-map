import { useEffect, useState } from "react";
import { getUser } from "../services/users";
import SheetGrid from "./SheetGrid";
import { useParams } from "react-router-dom";

function Profile() {
    const { username } = useParams();
    const [ error, setError ] = useState<any>(null);
    const [ userResponse, setUserResponse ] = useState<any>(null);
    useEffect(() => {
        getUser(username? username: "")
        .then(response => response.json())
        .then(data => setUserResponse(data))
        .catch(e => setError(e))
    }, []);
    if (error) {
        return (
            <div>
                {error.message}
            </div>
        );
    }
    if (!userResponse) {
        return(
            <div>
                Loading...
            </div>
        )
    }
    if (userResponse.error) {
        return (
            <div>
                <h1>{username}</h1>
                <br />
                {userResponse.error}
            </div>
        );
    }
    return (
        <>
            <h1>{username}</h1>
            <br />
            <SheetGrid username={username? username: ""}></SheetGrid>
        </>
    );
}

export default Profile;