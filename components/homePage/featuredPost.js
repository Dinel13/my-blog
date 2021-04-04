import PostsGrid from "../posts/posts-grid";
import classes from "./featuredPosts.module.css";
export default function featuredPost(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
