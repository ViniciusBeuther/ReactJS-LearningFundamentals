import StorageItem from "./StorageItem";

class data {
    constructor(name) {
        this.name = name;
        this.itemList = [];
    }

    addItem({ name, quantity, price, description, category }) {
        this.itemList.push(new StorageItem(name, quantity, price, description, category));
    }

    removeItem(itemToRemove) {
        this.itemList = this.itemList.filter((currentItem) => currentItem.itemId !== itemToRemove.itemId);
    }
}

const User = new data("Beuther WEB");

User.addItem(new StorageItem("Cash", 12, 10.00, "Item for testing purposes", "Financial"));
User.addItem(new StorageItem("Pizza", 7, 25.00, "Item for testing purposes 2", "Food"));

export default User;
