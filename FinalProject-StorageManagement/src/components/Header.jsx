import React from "react"; // Add the missing import statement

import { Link } from "react-router-dom"

const Header = () =>{
    return(

        <>
        
        <header 
            className="
                header
                bg-background-100
                text-beige
                flex
                justify-between
                items-center
                px-3
                text-lg
            "
        >
            <h1 
                className="
                    text-2xl
                "
            >REACT STOCK</h1>
            
            <span className="
                flex
                gap-3
            ">
                <Link to="/storage">Items</Link>
                <Link to="/">Home</Link>
            </span>
        </header>
        </>
    )
}

export default Header