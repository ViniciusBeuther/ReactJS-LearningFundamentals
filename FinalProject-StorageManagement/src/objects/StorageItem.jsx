
class StorageItem{
    constructor(name, quantity, price, description, category){
        this.name = name,
        this.quantity = quantity,
        this.price = price, 
        this.description = description,
        this.category = category, 
        this.addedDate = new Date()
        this.itemId = Math.floor(Math.random() * 10000)
    }

}


export default StorageItem