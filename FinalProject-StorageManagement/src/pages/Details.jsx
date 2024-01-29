import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import User from "../objects/User"


function handleRemove(item){
    const navigate = useNavigate
    const route = "http://localhost:5173/"
    User.removeItem(item)
    console.log("Removed")
    navigate(route)
    
}

function handleSubmit(item){
    handleRemove(item)
}

const Details = () =>{
    const { itemID } = useParams()
    const dataBase = User.itemList

    const item = dataBase.find(itm => itm.itemId === +itemID)

    if(!item){
        return(
            <h2>Item Not Found!</h2>
        )
    }

    return(
        <div className="details">
            <Header page={`${item.name}`} />
            <NavBar />
            <article className="flex items-center">
                <h1 className="text-3xl p-2">{item.name}</h1>
                
                <form onSubmit={() => handleSubmit(item)} className="grid grid-cols-2 grid-rows-1 gap-2 pl-5">
                    <Link to={`/updateItem/${item.itemId}`}>
                        <button className="bg-beige text-black p-1 rounded-md hover:brightness-75" >
                            Update
                        </button>
                    </Link>
                    
                        <button className="bg-customRed text-black p-1 rounded-md hover:brightness-75" type="submit">
                            Remove
                        </button>
                    
                </form>
            </article>
        </div>
    )
}

export default Details
