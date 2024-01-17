import StorageItem from "./StorageItem"

class data{
    constructor(name){
        this.name = name,
        this.itemList = []
    }

        addItem(itemObj){
            this.itemList.push(itemObj)
        }

        removeItem(itemToRemove){
            for(let i = 0; i < this.itemList.length; i++){
                if(itemToRemove == this.itemList[i]){
                    this.itemList.splice(this.itemList[i])
                }
            }
        }

    }

const User = new data("Beuther WEB")


    User.addItem(new StorageItem("Cash",12,10.00,"Item for testing purposes", "Financial"))
    User.addItem(new StorageItem("Pizza",7,25.00,"Item for testing purposes 2", "Food"))
    
export default User
