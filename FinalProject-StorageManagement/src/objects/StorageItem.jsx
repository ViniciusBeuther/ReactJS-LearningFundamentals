
class StorageItem{
    constructor(name, quantity, price, description, category){
        this.name = name,
        this.quantity = quantity,
        this.price = price, 
        this.description = description,
        this.category = category, 
        this.addedDate = formatDate(new Date())
    }
}

export default StorageItem