import styles from './index.css'

export default function ButtonComponent({ textContent, url }){
    return(
            <button className={styles.button}>
                <a href={url} target="_blank">{textContent}</a>
            </button>
    )
}