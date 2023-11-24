export default function App(){
  return(
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <label htmlFor="game-title">Titulo do jogo: </label>
      <input type="text" name="game-title" id="title-input" />

      <label htmlFor="image-url">Coloque a url da capa: </label>
      <input type="text" name="image-cover" id="cover-input" />
    </div>
  )
}