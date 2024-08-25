import { Section } from '@/components/Section';
import { Header } from '../Header';
import { SummaryInfo } from '@/components/SummaryInfo';
import { MainContent } from '../MainContent';
import css from './SummarySection.module.scss';

export const SummarySection = () => {
  return (
    <Section>
      <Header />
      <MainContent />
      <div className={css.infoWrapper}>
        <SummaryInfo quantity="1,873" description="LLM models" />
        <SummaryInfo
          quantity="$326,734"
          description="Paid to data scientists"
        />
        <SummaryInfo quantity="6,557" description="Developers" />
      </div>
    </Section>
  );
};
