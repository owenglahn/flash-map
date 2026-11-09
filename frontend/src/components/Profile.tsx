import SheetGrid from "./SheetGrid";
import { useParams } from "react-router-dom";

function Profile() {
    const { username } = useParams();
    if (!username) {
        return (<></>);
    }
    return (
        <>
            <h1>{username}</h1>
            <br />
            <SheetGrid username={username}></SheetGrid>
        </>
    );
}

export default Profile;