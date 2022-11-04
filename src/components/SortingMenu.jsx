import { useState } from "react"
import "../Styling/SortingMenu.css"


const SortingMenu = ({sortByURL, setSortByURL}) => {
    const [activeDate, setActiveDate] = useState("active")
    const [activeVotes, setActiveVotes] = useState("")
    const [activeCommentCount, setActiveCommentCount] = useState("")
    const [openMenu, setOpenMenu] = useState(false)


    const handleClickSortBy = () => {
        setOpenMenu(!openMenu)
      }
    
    
    
      const sortByDate = () => {
        setActiveCommentCount("")
        setActiveVotes("")
        setActiveDate("active")
        setSortByURL("&sort_by=created_at")
    
      }
    
      const sortByCommentCount = () => {
        setActiveVotes("")
        setActiveDate("")
        setActiveCommentCount("active")
        setSortByURL("&sort_by=comment_count")
    
      }
    
      const sortByVotes =() =>{
        setActiveCommentCount("")
        setActiveDate("")
        setActiveVotes("active")
        setSortByURL("&sort_by=votes")
      }
    

    return(
      

    
<div>
        <div id="dropdowndiv">  <button id="dropdown"onClick=               {handleClickSortBy}>Sort By</button> </div>
        {openMenu ? (
        <ul className="menu">
          <button className={activeDate}id="smallerbutton" onClick={sortByDate}>Date </button>
          <button id="smallerbutton"className={activeCommentCount} onClick={sortByCommentCount}>Comment Count</button> 
          <button id="smallerbutton" onClick={sortByVotes} className={activeVotes}>Votes</button>
          
        </ul>
      ): null } 
      </div>

    )
}

export default SortingMenu