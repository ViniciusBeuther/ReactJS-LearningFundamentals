import Header from "../components/Header";
import NavBar from "../components/NavBar";
import NewItemForm from "../components/NewItemForm";

export default function NewItem(user){
    return(
        <div className="newItem">
            <Header page={"Add New Item"}  />
            <NavBar />
            <NewItemForm user={user} />
        </div>
    )
}