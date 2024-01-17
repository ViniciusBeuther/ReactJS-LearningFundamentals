function handleClick() {
    return(alert('CLICK'))
}

const Table = (props) => {
    const headers = props.headerContent
    const arrayOfItems = props.dataArr

    return(
        <>
            <table className="w-[50%] mx-3 my-5">
                <thead className="bg-background-200 text-beige">
                    <tr className="py-2 px-3 flex items-center">
                        <th className=" w-[50%] text-left px-4">{headers[0]}</th>
                        <th>{headers[1]}</th>
                        <th className=" w-[50%] text-center">{headers[2]}</th>
                    </tr>
                </thead>

                <tbody className="text-beige">
                    {arrayOfItems.map((itemOfArray) =>(
                        <tr key={itemOfArray.itemId} className="py-2 flex items-center px-3 bg-background-100">

                        <td className=" py-2 px-4 w-[50%] text-left text-lg">
                                {itemOfArray.name}
                        </td>
                            {headers[1] === "" ?
                        <td>

                        </td> :
                        
                        <td className="w-[70px] text-center">
                            {itemOfArray.quantity}
                        </td>
                    }

                        <td className="w-[50%] text-center">
                            <button class="bg-beige hover:pointer text-black font-bold py-2 px-4 rounded-full text-lg"
                            onClick={handleClick}
                            >Details</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </>
    )
}

export default Table


//<TableHeader headerContent={props.headerContent} />
//<TableContent data={props.data} /> 