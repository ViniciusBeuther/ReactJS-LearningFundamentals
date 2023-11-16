import ButtonComponent from '../Button/ButtonComponent'
import styles from './styles.module.css'

export default function CardComponent({ title, image}){

    return (
        <div className={styles.container}>
            <div className="cape-figure">
                <img alt={title} src={image} />
            </div>
            <div>
                <h1 className={styles.title}>
                    {title}
                </h1>
                <p>
                    Um poster decorativo épico do filme Star Wars com molduras de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico poster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
                </p>

                <ButtonComponent text={'Comprar agora'} color={'grey'} />
            </div>
        </div>
    )
}