import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostPage(props) {
  return <> 
  <Head>
        <title>All post</title>
        <meta
          name="description"
          content="a list of all programming blog"
        />
      </Head>
  <AllPosts posts={props.posts} /> </>
}

export async function getStaticProps(){
  const allPosts = getAllPosts()
  return {
    props : {
      posts : allPosts
    }
  }
}
