import ReactMarkdown from "react-markdown";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const DUMMY_DATA = {
  title: "test1",
  image: "test1.png",
  date: "20222-01-10",
  slug: "getting-started-with-nextjs",
  content: "# this is frirst post",
};

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_DATA.slug}/${DUMMY_DATA.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_DATA.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_DATA.content}</ReactMarkdown>
    </article>
  );
}
