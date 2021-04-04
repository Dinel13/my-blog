import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

//separate metadata and content
export function getPostData(postIdentifier) {
  //post slug diatas agar dinamis
  //jika dari slug link maka tdak punya md
  //jika dari index maka ada md
  const postSlug = postIdentifier.replace(/\.md$/, ""); //remove extension
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  //matter memisahkan metadata dengan isi data
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

//get all files in post directory
export function getPostsFiles(){
  return fs.readdirSync(postDirectory);
}

export function getAllPosts() {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort(
    (postA, postB) => (postA.date > postB.date ? -1 : 1) // -1 = descending
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
