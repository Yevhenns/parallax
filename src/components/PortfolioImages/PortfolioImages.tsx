import Image from 'next/image';
import Link from 'next/link';
import css from './PortfolioImages.module.scss';

export const PortfolioImages = () => {
  return (
    <div className={css.layout}>
      <Link href={'#'} target="_blank" rel="noopener noreferrer">
        <Image
          src={'/portfolio/solana.png'}
          alt="solana"
          width={334}
          height={50}
          priority={false}
        />
      </Link>
      <Link href={'#'} target="_blank" rel="noopener noreferrer">
        <Image
          src={'/portfolio/arweave.png'}
          alt="arweave"
          width={421}
          height={100}
          priority={false}
        />
      </Link>
      <Link href={'#'} target="_blank" rel="noopener noreferrer">
        <Image
          src={'/portfolio/bittensor.png'}
          alt="bittensor"
          width={328}
          height={58}
          priority={false}
        />
      </Link>
      <Link href={'#'} target="_blank" rel="noopener noreferrer">
        <Image
          src={'/portfolio/rec.png'}
          alt="rec"
          width={102}
          height={102}
          priority={false}
        />
      </Link>
      <Link href={'#'} target="_blank" rel="noopener noreferrer">
        <Image
          src={'/portfolio/telegram.png'}
          alt="telegram"
          width={102}
          height={102}
          priority={false}
        />
      </Link>
    </div>
  );
};
