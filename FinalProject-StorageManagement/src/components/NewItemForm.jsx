const NewItemForm = (user) => {
    return(
        <div className="grid grid-cols-4 grid-rows-3 gap-4 px-32 py-5">
            <div className="flex flex-col text-beige" >
                <label htmlFor="name">Name</label>
                <input type="text" name="itemName" id="itemName" className="rounded-md p-1 text-black outline-none" />
            </div>

            <div className="flex flex-col text-beige" >
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="itemQuantity" id="itemQuantity" className="rounded-md p-1 text-black outline-none" />
            </div>

            <div className="flex flex-col text-beige" >
                <label htmlFor="price">Price</label>
                <input type="number" name="itemPrice" id="itemPrice" className="rounded-md p-1 text-black outline-none" />
            </div>
            
            <div className="flex flex-col text-beige" >
                <label htmlFor="Category">Category</label>
                <input type="text" name="itemCategory" id="itemCategory" className="rounded-md p-1 text-black outline-none" />
            </div>

            <div className="col-span-4 w-full flex flex-col text-beige mt-[-15px]">
                <label htmlFor="description">Description</label>
                <textarea name="itemDescription" id="itemDescription" className="text-black p-1 outline-none rounded-md"></textarea>
            </div>
            <button className="bg-beige text-black w-32 h-8 text-[16px] font-bold hover:bg-green-300 rounded-sm hover:shadow-md">Save</button>
        </div>
    )
}

export default NewItemForm