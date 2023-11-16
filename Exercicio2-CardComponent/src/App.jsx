import CardComponent from "./components/Card/CardComponent";
import posterImage from './assets/star-wars-card-image.jpg'
import empireStrikePoster from './assets/esb-poster.jpg'
import returnOfJediPoster from './assets/rotj-poster.jpg'

export default function App(){
  return(
    <>
    <h1>Exercicio 2</h1>
    <CardComponent title="Pôster: Star Wards (1977)" image={posterImage} />
    <CardComponent title ="Pôster: Empire Strikes Back (1980)" image={empireStrikePoster} />
    <CardComponent title="Pôster: Return of the Jedi (1983)" image={returnOfJediPoster}  />
    </>
  )
}