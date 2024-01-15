const QuantityDisplay = ({ description, stateQuantity }) => {
return (
    <section
    id="quantityDisplay"
    className="
        bg-background-200
        text-beige
        w-[350px]
        h-[200px]
        flex
        justify-center
        items-center
        "
    >
    <p
        className="
                relative
                top-[-75px]
                left-[-35%]
            "
    >
        {description}
    </p>
    <h1
        className="
                absolute
                text-5xl
            "
    >
        {stateQuantity}
    </h1>
    </section>
);
};

export default QuantityDisplay;
