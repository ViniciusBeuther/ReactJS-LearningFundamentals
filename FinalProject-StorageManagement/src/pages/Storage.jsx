import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function Storage(itemList){
    return(
        <div className="dashboard">
            <Header page={"Stock Items"} />
            <NavBar />
        </div>
    )
}