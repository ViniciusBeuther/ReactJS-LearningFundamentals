const QuantityDisplay = ({description, quantity}) => {
    
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
        {quantity}
    </h1>
    </section>
);
};

export default QuantityDisplay;
