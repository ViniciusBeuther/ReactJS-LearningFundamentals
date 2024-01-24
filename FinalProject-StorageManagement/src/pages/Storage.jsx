import Header from "../components/Header";
import NavBar from "../components/NavBar";
import StorageTable from "../components/StorageTable";

export default function Storage(user){
    return(
        <div className="storage w-full">
            <Header page={"Stock Items"} />
            <NavBar />
            <StorageTable user={user} />
        </div>
    )
}