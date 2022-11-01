import {Link} from "react-router-dom";
import "../Styling/Nav.css"

const Nav = () => {
    return (
        <ul id="nav">
            
                <p id="topicselect"><em>Select Topics</em></p>
            <Link id="first" key={1} to={"/"}>Home</Link> &nbsp;&nbsp;  
            <Link id="second" key={2} to={"/topics/coding"}>Coding</Link>&nbsp;&nbsp;
            <Link id="third" key ={3} to={"/topics/football"}>Football </Link> &nbsp;&nbsp;
            <Link id="fourth" key={4} to={"/topics/cooking"}>Cooking </Link>
      
        </ul>
    )
}

export default Nav