import TableContent from "./TableContent"
import TableHeader from "./TableHeader"

const Table = (props) => {
    const headers = props.headerContent
    console.log(headers)
    return(
        <>
            <table>
                <tr className="bg-background-200">
                    <th>{headers[0]}</th>
                    <th>{headers[1]}</th>
                    <th>{headers[2]}</th>
                </tr>

            </table>
        </>
    )
}

export default Table


//<TableHeader headerContent={props.headerContent} />
//<TableContent data={props.data} /> 