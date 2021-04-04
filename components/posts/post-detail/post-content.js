import ReactMarkdown from "react-markdown";
import Image from "next/image";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

export default function PostContent({ post }) {
  
  //to render img from markdown to IMage component fron next
  const customRenderes = {
    paragraph(paragraph) {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };

  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderes}>{post.content}</ReactMarkdown>
    </article>
  );
}
