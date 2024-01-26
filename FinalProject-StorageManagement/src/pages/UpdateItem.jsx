import { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";

export default function UpdateItem() {
    const { itemID } = useParams();
    const dataBase = User.itemList;
    const item = dataBase.find(itm => itm.itemId === +itemID);

    const [newName, setNewName] = useState(item.name);
    const [newQuantity, setNewQuantity] = useState(item.quantity);
    const [newPrice, setNewPrice] = useState(item.price);
    const [newCategory, setNewCategory] = useState(item.category);
    const [newDescription, setNewDescription] = useState(item.description);

    if (!item) {
        return <h2>Item Not Found!</h2>;
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        
        const itemToUpdate = {
            name: newName,
            quantity: newQuantity,
            price: newPrice,
            category: newCategory,
            description: newDescription,
            id: item.itemId
        };

        User.updateItem(itemToUpdate);

        // Limpar os estados
        setNewName("");
        setNewQuantity("");
        setNewPrice("");
        setNewCategory("");
        setNewDescription("");
    };

    return (
        <div className="updateItem">
            <Header />
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-4 grid-rows-3 gap-4 px-32 py-5">
                    <div className="flex flex-col text-beige" >
                        <label htmlFor="name">Name</label>
                        <input type="text" name="itemName" id="itemName" className="rounded-md p-1 text-black outline-none" onChange={(ev) => setNewName(ev.target.value)} value={newName} />
                    </div>

                    <div className="flex flex-col text-beige" >
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" name="itemQuantity" id="itemQuantity" className="rounded-md p-1 text-black outline-none" onChange={(ev) => setNewQuantity(ev.target.value)} value={newQuantity} />
                    </div>

                    <div className="flex flex-col text-beige" >
                        <label htmlFor="price">Price</label>
                        <input type="number" name="itemPrice" id="itemPrice" className="rounded-md p-1 text-black outline-none" onChange={(ev) => setNewPrice(ev.target.value)} value={newPrice} />
                    </div>
                    
                    <div className="flex flex-col text-beige" >
                        <label htmlFor="Category">Category</label>
                        <input type="text" name="itemCategory" id="itemCategory" className="rounded-md p-1 text-black outline-none" onChange={(ev) => setNewCategory(ev.target.value)} value={newCategory} />
                    </div>

                    <div className="col-span-4 w-full flex flex-col text-beige mt-[-15px]">
                        <label htmlFor="description">Description</label>
                        <textarea name="itemDescription" id="itemDescription" className="text-black p-1 outline-none rounded-md" onChange={(ev) => setNewDescription(ev.target.value)} value={newDescription}></textarea>
                    </div>
                    <button className="bg-beige text-black w-32 h-8 text-[16px] font-bold hover:bg-green-300 rounded-sm hover:shadow-md" type="submit" >Update</button>
                </div>
            </form>
        </div>
    );
}
