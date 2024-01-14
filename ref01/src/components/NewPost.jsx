// import { useState } from 'react'

import classes from './NewPost.module.css';

function NewPost(props) {
  // const[enteredBody, setEnteredBody] = useState('')
  
  // function changeBodyHandler(event) {
  //   setEnteredBody(event.target.value)
  // }
  
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange}/>
      </p>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
      </p>
    </form>
  );
}

export default NewPost;