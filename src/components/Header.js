import "./Header.css"
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";

export default function Header({theme,setTheme}) {
  function toggleTheme(){
    if(theme==="heart"){
      setTheme("dark");
    }else{
      setTheme("heart");
    }
  }
  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="theme-container">
      <span className="icon" onClick={toggleTheme}>{theme==="heart"?<BsFillMoonStarsFill/>:<AiOutlineHeart/>}</span></div>
    </header>
  );
}
