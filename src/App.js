import './App.css';
import { useState } from 'react';

function App() {
  const [comment, setComment]=useState("");
  const [comments, setComments]=useState([]);

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]
  )};

  const onChangeHandler = (e) => {
    setComment(e.target.value)
  };
  return (
    <div className="comment-section">
      {comments.map((text) => (
        <div className="comment-display">{text}</div>
      ))}
      <div className="comment-container">
        <h1 className='title'>Comments</h1>
        <textarea value={comment} onChange={onChangeHandler} placeholder="Please drop a comment..." className="input"/>
        <button className="submit" onClick={onClickHandler}>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
