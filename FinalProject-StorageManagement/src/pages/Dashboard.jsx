import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuantityDisplay from "../components/QuantityDisplay";
import TableHeader from "../components/TableHeader";


export default function Dashboard(itemList){
    const [diversity, setDiversity] = useState(0)
    const [totalInStorage, setTotalInStorage] = useState(0)
    const [recentItems, setRecentItems] = useState([])
    const [itemsEnding, setItemsEnding] = useState([])

    const displayInformationList = [{description: "Diversity of items", stateQuantity: diversity} ] 
    const leftTable = ["Recent Items", "", "Actions"]
    const rightTable = ["Ending Items", "Quantity", "Actions"]

    return(
        <div className="
            dashboard
            h-[100vh]
            bg-background-100
        ">
            <Header />
            <h1 className="
                text-5xl
                px-3
                text-beige
                my-5
            ">Dashboard</h1>

            <article className="
                flex
                justify-between
                gap-5
                px-3
                flex-wrap
            ">
                {displayInformationList.map(({description, stateQuantity})=>(
                    <QuantityDisplay description={description} stateQuantity={stateQuantity} />
                ))}
            </article>
        
            <article className="
                tables
                flex
                justify-between
                items-center
            ">
                    <TableHeader headerContent={leftTable} />
                    <TableHeader headerContent={rightTable} />
            </article>
            <Footer />
        </div>
    )
}