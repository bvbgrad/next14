import classes from './Post.module.css';


// const names = ['Max', 'Brent'];
// const chosenName = Math.random() > 0.5 ? names[0] : names[1];

function Post(props) {
  return(
  <div className={classes.post}>
    <p className={classes.author}>{props.author}</p>
    <p className={classes.text}>{props.body}</p>
  </div>
  )
}

export default Post;
