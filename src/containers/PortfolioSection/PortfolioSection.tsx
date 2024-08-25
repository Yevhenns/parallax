import { Section } from '@/components/Section';
import { PortfolioImages } from '@/components/PortfolioImages';
import css from './PortfolioSection.module.scss';

export const PortfolioSection = () => {
  return (
    <Section>
      <div className={css.wrapper}>
        <h2>Projects integrated into the Arrakis AI Ecosystem</h2>
        <div className={css.imagesWrapper}>
          <PortfolioImages />
          <PortfolioImages />
        </div>
      </div>
    </Section>
  );
};
