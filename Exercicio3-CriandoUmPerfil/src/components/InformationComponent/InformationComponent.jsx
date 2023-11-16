import style from "./index.css"

export default function InformationComponent({ description, phone, email }){
    return (
        <>

            <p>{description}</p>
            <hr className={style.hr} />
            <p>{phone}</p>
            <hr className={style.hr} />
            <p>{email}</p>
            <hr className={style.hr} />
        </>
    )
}