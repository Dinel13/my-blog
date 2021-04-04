import Hero from "../components/homePage/hero";
import FeaturedPost from "../components/homePage/featuredPost";

const DUMMY_DATA = [
{ title :"test1", image :"test1.png", excerpt : "testestsetta1", date :"20222-01-10", slug :"getting-started-with-nextjs"},
{ title :"test2", image :"test1.png", excerpt : "testestsetta2", date :"20222-02-10", slug :"getting-started-with-nextjs2"},
{ title :"test3", image :"test1.png", excerpt : "testestsetta3", date :"20222-03-10", slug :"getting-started-with-nextjs3"}
]
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_DATA} />
    </>
  );
}
