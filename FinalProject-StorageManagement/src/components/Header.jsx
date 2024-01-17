import React from "react"; // Add the missing import statement

import { Link } from "react-router-dom"

const Header = (props) =>{
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
        {props.page === "" ?
            null            : 
        <h1 className="
                text-5xl
                px-3
                text-beige
                my-5
            ">{props.page}</h1>
    }
        </>
    )
}

export default Header