import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function NewItem(itemList){
    return(
        <div className="dashboard">
            <Header page={"Add New Item"}  />
            <NavBar />
        </div>
    )
}