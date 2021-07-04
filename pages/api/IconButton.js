
import {
  useMemo
} from 'react';

import clsx from 'clsx';

export const ICON_MENU = 'ICON_MENU';
export const ICON_SEARCH = 'ICON_SEARCH';
export const ICON_CLOSE = 'ICON_CLOSE';


export const IconButton = props => {

  const pIcon = props.icon;
  const pDark = props.dark;

  const memodIcon = useMemo( () => {
    const className = clsx( 
      'h-6',
      'w-6',

      'transition-text ease-bop duration-300',
      'stroke-current',
      pDark ? 'text-white' : 'text-black',
      `group-hover:${ pDark ? 'text-black' : 'text-white' }`
    );

    const icons = {
      [ICON_MENU]:
      <svg xmlns="http://www.w3.org/2000/svg" className={ className } fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>,
      [ICON_SEARCH]:
      <svg xmlns="http://www.w3.org/2000/svg" className={ className } fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>,
      [ICON_CLOSE]:
      <svg xmlns="http://www.w3.org/2000/svg" className={ className } fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    };
    const icon = icons[pIcon];
    return icon;
  }, [
    pIcon,
    pDark
  ] );

  return (
    <a className={ clsx(
      'h-8',
      'w-8',

      'transition-bg ease-bop duration-300',
      pDark ? 'bg-black' : 'bg-white',
      pDark ? 'hover:bg-white' : 'hover:bg-black',

      'rounded-full',
      'flex',
      'items-center justify-center',

      'cursor-pointer',

      'group'
      ) }
    >
      { memodIcon }
    </a>
  );
}