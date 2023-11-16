import style from "./index.css"

export default function InformationComponent({ name, description, phone, email }){
    return (
        <>
            <h1>{name}</h1>
            <hr className={style.hr} />
            <p>{description}</p>
            <hr className={style.hr} />
            <p>{phone}</p>
            <hr className={style.hr} />
            <p>{email}</p>
            <hr className={style.hr} />
        </>
    )
}