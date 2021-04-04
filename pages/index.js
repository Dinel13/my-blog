import Hero from "../components/homePage/hero";
import FeaturedPost from "../components/homePage/featuredPost";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
