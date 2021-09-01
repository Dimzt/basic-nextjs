import type { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <Layout pageTitle="Home Page">
    <Image src="/profile.png" width={200} height={200} alt="profile" />
    <h1 className={styles['title-homepage']}>Welcome Dimas</h1>
  </Layout>
);

export default Home;
