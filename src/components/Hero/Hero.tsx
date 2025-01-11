import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>Track Your Watchlist with Ease</h1>
      <p>
        Discover movies, add them to your watchlist, and never miss your
        favorite shows again.
      </p>
    </div>
  );
};

export default Hero;
