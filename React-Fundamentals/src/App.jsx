import StatusTxt from "./Components/StatusTxt"
import { Subtitle } from "./Components/Subtitle"
import Title from "./Components/Title/Title"
import Styles from './App.module.css'

export default function App(){
  return (
    <div className={Styles.app}>
      <Title />
      <Subtitle />
      <StatusTxt /> 
    </div>
  )
}

// Não podemos colocar algo que nao seja expressões JS dentro do {}, como por exemplo, for, while, switch case, if (apenas ternario) etc