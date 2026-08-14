import SheetGrid from "./SheetGrid";
import { useParams } from "react-router-dom";

function Profile() {
    const { username } = useParams();
    return (
        <>
            <h1>{username}</h1>
            <br />
            <SheetGrid></SheetGrid>
        </>
    );
}

export default Profile;