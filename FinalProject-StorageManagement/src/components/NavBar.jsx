import { Link } from "react-router-dom"

function handleSelectedItems (){

}

const NavBar = () => {
    return(
        <>
        <nav className="pl-3 text-beige text-lg flex items-center justify-start gap-5">
            <Link to={"/storage"} className="hover:font-bold hover:border-b-2">All Items</Link>
            <Link to={"/newItem"} className="hover:font-bold hover:border-b-2">Add New Item</Link>
        </nav>
        <hr className="w-[99%] text-beige ml-2 mt-3" />
        </>
    )
}

export default NavBar