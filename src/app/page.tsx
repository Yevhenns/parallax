'use client';
import { SummarySection } from '@/containers/SummarySection';
import { MainSection } from '@/containers/MainSection';
import { PortfolioSection } from '@/containers/PortfolioSection';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <ParallaxBanner translate={[0, 100]} opacity={[100, 0]}> */}
      <MainSection />
      {/* </ParallaxBanner> */}
      {/* <Parallax> */}
      <SummarySection />
      {/* </Parallax> */}
      {/* <Parallax> */}
      {/* <PortfolioSection /> */}
      {/* </Parallax> */}
    </main>
  );
}
