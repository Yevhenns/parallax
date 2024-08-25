import { Section } from '@/components/Section';
import { Header } from '../Header';
import { MainContent } from '../MainContent';
import { BannerLayer, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import css from './MainSection.module.scss';

export const MainSection = () => {
  const headline: BannerLayer = {
    translateY: [0, 30],
    // scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <Section>
        <Header />
        <MainContent />
      </Section>
    ),
  };

  const foreground: BannerLayer = {
    image: '/bg/planet.png',
    translateY: [0, 15],
    // scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  return (
    <ParallaxBanner
      layers={[headline, foreground]}
      className="aspect-[2/1] bg-gray-900"
    />
  );
};
