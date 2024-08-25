import css from './SummaryInfo.module.scss';

export type SummaryInfoProps = {
  quantity: string;
  description: string;
};

export const SummaryInfo = ({ quantity, description }: SummaryInfoProps) => {
  return (
    <div className={css.layout}>
      <span className={css.quantity}>{quantity}</span>
      <span className={css.description}>{description}</span>
    </div>
  );
};
