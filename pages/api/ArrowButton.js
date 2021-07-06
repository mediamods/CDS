import clsx from 'clsx';

import { 
  ArrowSmRightIcon
} from '@heroicons/react/outline';


//todo: implement active from props??

export const ArrowButton = props => {

  const pText = props.text;
  const pLeft = props.left;
  const pJustify = props.justify;
  const pVisible = props.visible;
  const pActive = props.active;

  return (
    <a
      className={ clsx(
        'group',

        'cursor-pointer',

        'flex',
        pLeft ? 'flex-row' : 'flex-row-reverse',
        pJustify,

        'font-bold'
      ) }
    >
      <ArrowSmRightIcon
        className={ clsx(
          'h-6',
          'w-6',
          'stroke-current text-crimson',

          'transition ease-bop duration-300',
          'transform',
          'group-hover:translate-x-1',
          
          pVisible ? '' : 'opacity-0',
          pVisible ? '' : 'group-hover:opacity-100'
        ) }
      />

      { pText }

    </a>
  );
}