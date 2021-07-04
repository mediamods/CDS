
import {
  useMemo
} from 'react';

import clsx from 'clsx';

export const PillButton = props => {

  const pText = props.text;
  const pTheme = props.theme;

  const memodClassList = useMemo( () => {
    const classList = [
      'transition-bg ease-bop duration-300',

      'rounded-full',
      'py-3',
      'px-6',

        //https://stackoverflow.com/a/40141200/62255
      'self-start',

      'whitespace-nowrap',
      'cursor-pointer'
    ];

    const themeColors = {
      'crimson': [
        'border',
        'border-beige',

        'bg-crimson',
        'hover:bg-black',
        'text-white',
        'hover:text-white',

        'active:bg-crimson'
      ],
      'crimson-light': [
        'border',
        'border-beige',

        'bg-white',
        'hover:bg-black',
        'text-black',
        'hover:text-white',

        'active:bg-crimson'
      ],
      'dark': [
        'bg-black',
        'hover:bg-white',
        'text-white',
        'hover:text-black',

        'active:bg-black',
        'active:text-white'
      ]
    };

    classList.push( themeColors[pTheme] );

    return classList;
  }, [
    pTheme
  ] );


  return (
    <a className={ clsx( memodClassList ) }>
      { pText }
    </a>
  );
}