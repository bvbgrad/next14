import Post from "./Post";
import NewPost from "./NewPost";
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <>
    <ul className={classes.posts}>
      <Post author="Brent" body="body1"/>
      <Post author="Max" body="body2"/>
    </ul>
    </>
  )
}

export default PostsList