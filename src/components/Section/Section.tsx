import { ReactNode } from 'react';
import css from './Section.module.scss';

export type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <section className={css.section}>{children}</section>;
};
