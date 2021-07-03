
import clsx from 'clsx';

export const RoundButton = props => {

  const pText = props.text;

  return (
    <a className={ clsx(
      'bg-crimson',
      'text-white', 
      'h-36',
      'w-36',

      'rounded-full',
      'flex',
      'items-center justify-center',

      'shadow-noButtonCrimson',
      'hover:shadow-buttonCrimson',
      'transition-shadow ease-bop duration-300',

      'cursor-pointer'
      ) }
    >
      { pText }
    </a>
  );
}