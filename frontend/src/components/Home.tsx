import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>
                Flash Map!
            </h1>
            <Link to={'/flashsheet'}>
                Flash sheet
            </Link>
        </div>
    );
}

export default Home;