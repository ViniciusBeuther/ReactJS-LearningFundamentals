import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import NewItemForm from "../components/NewItemForm";

export default function NewItem(itemList){
    return(
        <div className="dashboard">
            <Header page={"Add New Item"}  />
            <NavBar />
            <NewItemForm user={""} />
        </div>
    )
}