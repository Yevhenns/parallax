import { Button } from '@/components/Button';
import css from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <div className={css.layout}>
      <h1>A new economic primitive for funding decentralized AI</h1>
      <p>
        We track, rank and pay for the best open source decentralized LLMs to
        compete against OpenAI
      </p>
      <div className={css.buttonsWrapper}>
        <Button isOutlined>Buy Salt AI</Button>
        <Button>Try Now</Button>
      </div>
    </div>
  );
};
