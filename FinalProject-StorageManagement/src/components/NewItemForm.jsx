import { useState } from "react"

function handleClick(user, itemObj){
    user.addItem(itemObj)
}

const NewItemForm = (props) => {
    const userObj = props.user.data
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const itemObj = {
        name: name,
        quantity: +quantity,
        price: +price,
        category: category,
        description: description
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        handleClick(userObj, itemObj)
    }

    return(
        <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-4 grid-rows-3 gap-4 px-32 py-5">

                <div className="flex flex-col text-beige" >
                    <label htmlFor="name">Name</label>
                    <input type="text" name="itemName" id="itemName" className="rounded-md p-1 text-black outline-none" onChange={(ev) => setName(ev.target.value)} />
                </div>

                <div className="flex flex-col text-beige" >
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name="itemQuantity" id="itemQuantity" className="rounded-md p-1 text-black outline-none" onChange={(ev) => setQuantity(ev.target.value)} />
                </div>

                <div className="flex flex-col text-beige" >
                    <label htmlFor="price">Price</label>
                    <input type="number" name="itemPrice" id="itemPrice" className="rounded-md p-1 text-black outline-none" onChange={(ev) => setPrice(ev.target.value)} />
                </div>
                
                <div className="flex flex-col text-beige" >
                    <label htmlFor="Category">Category</label>
                    <input type="text" name="itemCategory" id="itemCategory" className="rounded-md p-1 text-black outline-none" onChange={(ev) => setCategory(ev.target.value)} />
                </div>

                <div className="col-span-4 w-full flex flex-col text-beige mt-[-15px]">
                    <label htmlFor="description">Description</label>
                    <textarea name="itemDescription" id="itemDescription" className="text-black p-1 outline-none rounded-md" onChange={(ev) => setDescription(ev.target.value)}></textarea>
                </div>
                <button className="bg-beige text-black w-32 h-8 text-[16px] font-bold hover:bg-green-300 rounded-sm hover:shadow-md" type="submit" >Save</button>
            </div>
        </form>
    )
}

export default NewItemForm