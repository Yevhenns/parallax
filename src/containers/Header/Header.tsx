import { Button } from '@/components/Button';
import css from './Header.module.scss';

export const Header = () => {
  return (
    <header className={css.header}>
      <Button isSmall>How It Works</Button>
      <Button isSmall isOutlined>
        Buy Salt AI
      </Button>
    </header>
  );
};
