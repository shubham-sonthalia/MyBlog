import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="notFound">
            <h2>Sorry</h2>
            <p>The requested page can not be found!</p>
            <Link to = "/">Go to Home Page</Link>
        </div>
    );
}
 
export default NotFound;

{/* npx json-server --watch Data/db.json --port 8000*/}
