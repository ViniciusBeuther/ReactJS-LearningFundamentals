const TableHeader = ({headerContent}) => {
    return (
        <>
            <section className="
                tableHeader
                flex
                justify-between
                items-center
                mx-3
                my-5
                p-5
                w-[100%]
                bg-background-200
                text-beige
            ">
                <p>{headerContent[0]}</p>
                <p>{headerContent[1]}</p>
                <p>{headerContent[2]}</p>
            </section>
        </>
    )
}

export default TableHeader