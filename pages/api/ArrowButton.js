
import clsx from 'clsx';

export const ArrowButton = props => {

  const pText = props.text;
  const pLeft = props.left;

  return (
    <div className={ clsx(
      'group',

      'cursor-pointer',

      'flex',
      pLeft ? 'flex-row' : 'flex-row-reverse',
      pLeft ? 'justify-start' : 'justify-end'
      ) }
    >
      {/*https://tailwindcss.com/docs/fill*/}
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className={ clsx(
          'h-6 w-6',
          /*https://tailwindcss.com/docs/fill*/
          'stroke-current text-crimson',

          'transition-bg ease-bop duration-300',
          'transform',
          'group-hover:translate-x-1'
        ) }
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>

      { pText }

    </div>
  );
}