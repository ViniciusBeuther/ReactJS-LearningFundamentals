import { useState } from "react"

const App = () => {
  const handleSubmit = () => {    
    const newComment = {
        id: Math.floor(Math.random() * 1000000),
        author: emailInput,
        content: commentInput,
        createdAt: new Date()
    }

    setComments((state) => [newComment, ...state])
    setEmailInput("")
    setCommentInput("")
  }

  const [comments, setComments] = useState([])
  const [emailInput, setEmailInput] = useState("")
  const [commentInput, setCommentInput] = useState("")

  return(
    <div style={
      {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }
    }>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        width: '30%',
      }}>
        <h1>Comments</h1>
          <label htmlFor="email">Email</label>
          <input id="author" type="text" value={emailInput} onChange={(ev) => setEmailInput(ev.target.value)} />
          <label htmlFor="Comment">Commentary</label>
          <textarea id="content" value={commentInput} onChange={(ev) => setCommentInput(ev.target.value)} />
          <button id="button" onClick={handleSubmit}>Submit</button>
          <hr />

          <section>
            {comments.map((comment) => (
              <div key={comment.id} style={{
                backgroundColor: "white",
                width: "250px",
                padding: "5px",
                marginBottom: "10px",
                borderRadius: '5px'
              }}>
                <h3>{comment.author}</h3>
                <span>Created at: {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
              </div>
            ))}
          </section>
      </div>
    </div>
  )
}

export default App