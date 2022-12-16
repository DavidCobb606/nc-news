import { useState } from "react"
import "../Styling/OrderMenu.css"


const OrderMenu = ({setOrderByURL}) => {

    const [descending, setDescending] = useState(true)
    const [activeAsc, setActiveAsc] = useState("")
    const [activeDesc, setActiveDesc] = useState("active")

    const handleClickAsc = () => {
        setDescending(!descending)       
        setActiveDesc("")
        setActiveAsc("active")
        setOrderByURL("?orderBy=asc")    
      }
    
      const handleClickDesc = () => {
        setDescending(!descending)        
        setActiveAsc("")
        setActiveDesc("active")
        setOrderByURL("?orderBy=desc")    
      }
  return(
    <>
      <div id="descdropdown"><button id="ascdesc"className={activeDesc}onClick={handleClickDesc}>Descending</button>
      </div>      
      <div id="ascdropdown"> <button id="ascdesc"className={activeAsc}onClick={handleClickAsc}>Ascending</button>  
      </div>
          
          
    </>
    )
}

export default OrderMenu