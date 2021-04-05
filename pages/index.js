import Head from "next/head";
import Hero from "../components/homePage/hero";
import FeaturedPost from "../components/homePage/featuredPost";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Din's Blog</title>
        <meta
          name="description"
          content="i post about programing, web development and personal development"
        />
      </Head>
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
