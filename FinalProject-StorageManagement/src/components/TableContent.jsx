const TableContent = (props) => {
    console.log(props)
    const array = props.data.itemList
    return(
        <> 
            <div>
                <p>Description</p>
                <button>Details</button>
            </div>
            {console.log(array)}
        </>
    )
}

export default TableContent