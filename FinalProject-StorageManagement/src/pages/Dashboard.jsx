import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuantityDisplay from "../components/QuantityDisplay";
import TableHeader from "../components/TableHeader";
import Table from "../components/Table";

function verifyUniqueItems(array) {
    let uniqueItems = new Set();
    array.forEach((ArrItem) => {
        uniqueItems.add(ArrItem.category);
    });

    return uniqueItems;
}

function verifyRecentItems(array) {
    let recentItems = []
    const today = new Date()
    
    array.forEach((ArrItem) => {
        let differenceInTime = today.getTime() - ArrItem.addedDate.getTime()
        let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))
        if(differenceInDays <= 10){
            recentItems.push(ArrItem)
        }  
    })

    return(recentItems)
}

function verifyEndingItems(array){
    const lowLevel = []
    array.forEach((ArrItem) => {
        if (ArrItem.quantity < 10){
            lowLevel.push(ArrItem)
        }
    })
    
    const result = lowLevel.length === 0 ? 0 : lowLevel.length
    
    return(result)
}

export default function Dashboard(dataObj){
    const userObj = dataObj.data

    const leftTable = ["Recent Items", "", "Actions"]
    const rightTable = ["Ending Items", "Quantity", "Actions"]

    const [diversity, setDiversity] = useState(verifyUniqueItems(userObj.itemList).size)

    const [totalInStorage, setTotalInStorage] = useState(userObj.itemList.length)

    const [recentItems, setRecentItems] = useState(verifyRecentItems(userObj.itemList).length)

    const [itemsEnding, setItemsEnding] = useState(verifyEndingItems(userObj.itemList))

    const displayInformationList = [
        ["Different Items in Stock", diversity], 
        ["Total of Items in Stock", totalInStorage],
        ["Recent Items", recentItems],
        ["Less than 10 Items", itemsEnding]
    ]

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
                {displayInformationList.map(([desc, quantity], index)=>(
                    <QuantityDisplay key={index} description={desc} quantity={quantity} />
                ))}
            </article>
        
            <article className="
                tables
                flex
                justify-between
                items-center
                border
            ">
                <Table headerContent={leftTable} data={userObj} />
            
                <Table headerContent={rightTable} data={userObj} />
            </article>
            <Footer />
        </div>
    )
}