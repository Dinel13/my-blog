import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDirectory = path.join(procces.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  //matter memisahkan metadata dengan isi data
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, ""); //remove extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}
export function getAllPosts() {
  const postFiles = fs.readdirSync(postDirectory);

  const allPosts = postFiles.map((postFile) => {
    getPostData(postFile);
  });

  const sortedPosts = allPosts.sort(
    (postA, postB) => (postA.date > postB.date ? -1 : 1) // -1 = descending
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts
}
