import style from "./index.module.css"

export default function TitleComponent(props){
    return  (
        <>
            {props.children}
            <hr className={style.hr} />
        </>
    )
}
