import {Link} from "react-router-dom";
import "../Styling/Nav.css"
import SortingMenu from "./SortingMenu";
import OrderMenu from "./OrderMenu";

const Nav = ({setSortByURL, setOrderByURL, sortByURL, orderByURL}) => {


  

 return (
<div class="flex-container">

  <div class="flex-child 1"><SortingMenu setSortByURL={setSortByURL} sortByURL={sortByURL}/>
      <OrderMenu orderByURL={orderByURL} setOrderByURL={setOrderByURL} /> </div>
    <p id="nav">
    <div class="flex-child-2">
      <p id="topicselect"><em>Select Topics</em></p>
        <Link id="topic" key={1} to={"/"}>Home</Link>   
        <Link id="topic" key={2} to={"/topics/coding"}>Coding</Link>
        <Link id="topic" key ={3} to={"/topics/football"}>Football </Link> 
        <Link id="topic" key={4} to={"/topics/cooking"}>Cooking </Link>
       </div>
        
  </p>
  </div>
    )
}

export default Nav