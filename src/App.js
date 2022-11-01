import "./Styling/General.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Nav/>
      
      <Routes>
      <Route path="/" element={<ArticleList/>}/>

      </Routes>
      
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
