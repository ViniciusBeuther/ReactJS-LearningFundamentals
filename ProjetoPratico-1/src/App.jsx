import { useState } from "react"

export default function App(){
  const [games, setGames] = useState([])
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  const handleClick = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle = ''
    setCover = ''
  }

  const addGame = ({ title, cover }) => {
    const id = Math.random(Math.random * 1000)
    const game = { id, title, cover }
    setGames(state => [...state, game])
  }

  return (
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <form action="form">
        <label htmlFor="game-title">Titulo do jogo: </label>
        <input 
          type="text" 
          name="game-title" 
          id="title-input"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}  
        />

        <label htmlFor="image-url">Coloque a url da capa: </label>
        <input 
          type="text" 
          name="image-cover" 
          id="cover-input"
          value={cover}
          onChange={(ev) => setCover(ev.target.value)}
        />

        <button 
          onClick={handleClick}
        > Adicionar
        </button>
      </form>

      <div className="games-div">
        {games.map((item) => (
          <div key={item.id}>
            <img src={item.cover} alt="" />
            <span>
              <h2>{item.title}</h2>
              <br />
              <button>
                Remover
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}