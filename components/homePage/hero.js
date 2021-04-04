import Image from "next/image";
import classes from "./hero.module.css";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/din.png" alt="salahuddin" width={330} height={330} />
      </div>
      <h1>Hi, I`m Din</h1>
      <p>
        I blog about web development, personal development and organisation
        davelopment
      </p>
    </section>
  );
}
