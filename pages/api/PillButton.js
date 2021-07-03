
import clsx from 'clsx';

export const PillButton = props => {

  const pText = props.text;
  const pCrimson = props.crimson;

  const classList = [
    'transition-bg ease-bop duration-300',

    'border',
    'border-beige',

    'rounded-full',
    'py-3',
    'px-6',

      //https://stackoverflow.com/a/40141200/62255
    'self-start',

    'whitespace-nowrap',
    'cursor-pointer'
  ];

  if (pCrimson) {
    classList.push(
      'bg-crimson',
      'hover:bg-black',
      'text-white',
      'hover:text-white',

      'active:bg-crimson'
    );
  }
  else {
    classList.push(
      'bg-white',
      'hover:bg-black',
      'text-black',
      'hover:text-white',

      'active:bg-crimson'
    );
  }

  return (
    <a className={ clsx( classList ) }>
      { pText }
    </a>
  );
}