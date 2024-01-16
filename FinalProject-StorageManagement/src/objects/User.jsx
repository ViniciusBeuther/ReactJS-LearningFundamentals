import StorageItem from "./StorageItem"

const User = {
    name: "Beuther WEB",
    itemList: [],

    addItem(itemObj){
        this.itemList.push(itemObj)
        }
    }


    User.addItem(new StorageItem("Cash",12,10.00,"Item for testing purposes", "Financial"))
    User.addItem(new StorageItem("Pizza",2,25.00,"Item for testing purposes 2", "Food"))
    
export default User
