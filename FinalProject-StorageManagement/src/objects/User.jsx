import StorageItem from "./StorageItem"

const User = {
    name: "Beuther WEB",
    itemList: [new StorageItem("Item1",10,10.00,"Dummy descirption", "Test")],
  
    addItem(itemObj){
      this.itemList.push(itemObj)
    }
  }

export default User