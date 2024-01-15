import Header from "../components/Header";
import QuantityDisplay from "../components/QuantityDisplay";

export default function Dashboard(itemList){
    const n = ["1", "2", "3", "4"]

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
                {n.map(()=>(
                    <QuantityDisplay />
                ))}
            </article>
        
            
        </div>
    )
}