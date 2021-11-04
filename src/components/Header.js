import React from "react";
import Navigation from "./Navigation";

function Header(props){
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold">
                {props.name}
            </span>

            <Navigation/>
        </header>
    )
}

export default Header