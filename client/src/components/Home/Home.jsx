import styles from './styles.module.scss';
import nftpink from '../../assets/nft-pink.jpg';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>NFT Marketplace</h1>
        <p>Buy and sell unique NFT to the world</p>
        <button className={styles.button}>Explore</button>
      </div>
      <div className={styles.boximage}>
        <img className={styles.image} src={nftpink} alt='nft-pink' />
      </div>
    </div>
  );
};

export default Home;
