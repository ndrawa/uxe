import React from "react";
import Navigation from "./Navigation";

function Header(props){
    const refreshPage = ()=>{
        window.location.reload();
     }

    return (
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold" onClick={refreshPage}>
                {props.name}
            </span>

            <Navigation  role={props.role}/>
        </header>
    )
}

export default Header