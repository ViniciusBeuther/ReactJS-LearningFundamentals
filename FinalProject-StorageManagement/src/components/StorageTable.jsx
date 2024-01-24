import { Link, useParams } from "react-router-dom"
import Table from "./Table"
import User from "../objects/User"
import { useState } from "react"

function handleRemove(item, state, setState) {
    console.log(User)
    User.removeItem(item)
    setState(state)
    console.log(User)
}

const StorageTable = (props) => {
    const headers = ["ID", "Name", "In Stock", "Category", "Actions"]
    const [arrayOfItems, setArrayOfItems] = useState(props.user.data.itemList)

    return(
        <section className="px-16 py-5">
            <article className="tableHeader grid grid-cols-5 grid-rows-1 gap-4 place-items-center bg-background-200 w-full p-2 text-beige shadow-sm mb-2">
                {headers.map((element, index) => (
                    <h1 key={index}>{element}</h1>
                ))}
            </article>

            <article className="tableRows text-beige">
                {arrayOfItems.map((rowContent, index) => (
                    
                        <article className="grid grid-cols-5 grid-rows-1 place-items-center w-full mb-2" key={index}>
                            <p>{rowContent.itemId}</p>
                            <p>{rowContent.name}</p>
                            <p>{rowContent.quantity}</p>
                            <p>{rowContent.category}</p>
                        
                            <div className="grid grid-cols-3 gap-2 text-black">
                                <Link to={`/storage/${rowContent.itemId}`} className="w-full">
                                    <button className="bg-customGreen p-1 rounded-md hover:brightness-75">
                                        Detail
                                    </button>
                                </Link>

                                <button className="bg-beige p-1 rounded-md hover:brightness-75">
                                    Edit
                                </button>
                                <button className="bg-customRed p-1 rounded-md hover:brightness-75" onClick={() => handleRemove(rowContent, arrayOfItems, setArrayOfItems)}>
                                    Remove
                                </button>
                            </div>
                        </article>
                    
                ))}
            </article>
        </section>
    )
}

export default StorageTable