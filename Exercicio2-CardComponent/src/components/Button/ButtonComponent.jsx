import styles from "./button.module.css"

export default function ButtonComponent({ text, color }){
    return (
        <button className={styles.wrapper}>{text}</button>
    )
}