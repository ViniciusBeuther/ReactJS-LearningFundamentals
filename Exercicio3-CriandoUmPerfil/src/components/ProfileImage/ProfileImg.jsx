import styles from "./ProfileImg.module.css"

export default function ProfileImg({imageUrl}){
    return (
        <>
            <img src={imageUrl} alt= 'profile-picture' width={150} height={150} className={styles.profileImage} />
        </>
    )
}