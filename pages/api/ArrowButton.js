
import clsx from 'clsx';

import { 
  ArrowSmRightIcon
} from '@heroicons/react/outline';

export const ArrowButton = props => {

  const pText = props.text;
  const pLeft = props.left;

  return (
    <a
      className={ clsx(
        'group',

        'cursor-pointer',

        'flex',
        pLeft ? 'flex-row' : 'flex-row-reverse',
        pLeft ? 'justify-start' : 'justify-end'
      ) }
    >
      <ArrowSmRightIcon
        className={ clsx(
          'h-6',
          'w-6',
          'stroke-current text-crimson',

          'transition-bg ease-bop duration-300',
          'transform',
          'group-hover:translate-x-1'
        ) }
      />

      { pText }

    </a>
  );
}