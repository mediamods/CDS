import {
  useMemo
} from 'react';

import clsx from 'clsx';

import { 
  MenuIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
  XIcon
} from '@heroicons/react/outline';

export const ICON_CLOSE = 'ICON_CLOSE';
export const ICON_MENU = 'ICON_MENU';
export const ICON_MINUS = 'ICON_MINUS';
export const ICON_PLUS = 'ICON_PLUS';
export const ICON_SEARCH = 'ICON_SEARCH';

export const useIconButton = ( darkTheme, hoverToggle ) => {

  const iconButtonClassName = useMemo( () => {

    const classList = [
      'group',
      
      'h-8',
      'w-8',

      darkTheme ? 'bg-black' : 'bg-white',

      'rounded-full',
      'flex',
      'items-center',
      'justify-center',

      'cursor-pointer'
    ];
  
    if (hoverToggle) {
      classList.push(
        'transition-bg',
        'ease-bop',
        'duration-300',
        darkTheme ? 'hover:bg-white' : 'hover:bg-black',
      );
    }

    const buttClassName = clsx(
      classList,
      hoverToggle
    );

    return buttClassName;

  }, [
    darkTheme
  ] );

  return iconButtonClassName;

}

export const useIcon = ( darkTheme, hoverToggle, pIcon ) => {

  const icon = useMemo( () => {
    const classNames = getIconClassNames( darkTheme, hoverToggle );
    return getIconJsx( pIcon, classNames );
  }, [
    darkTheme,
    hoverToggle,
    pIcon
  ] );

  return icon;
};

export const useToggleIcon = ( darkTheme, pIconUnselected, pIconSelected ) => {

};

const getIconClassNames = ( darkTheme, hoverToggle ) => {

  const classList = [
    'h-6',
    'w-6',
    'stroke-current',
    darkTheme ? 'text-white' : 'text-black'
  ];

  if (hoverToggle) {
    classList.push(
      'transition-text',
      'ease-bop',
      'duration-300',
      `${ darkTheme ? 'group-hover:text-black' : 'group-hover:text-white' }`
    );    
  }

  const classNames = clsx( 
    classList
  );
  return classNames;
};

const getIconJsx = ( pIcon, className ) => {
  const icons = {
    [ICON_CLOSE]:
    <XIcon className={ className } />,
    [ICON_MENU]:
    <MenuIcon className={ className } />,
    [ICON_MINUS]:
    <MinusIcon className={ className } />,
    [ICON_PLUS]:
    <PlusIcon className={ className } />,
    [ICON_SEARCH]:
    <SearchIcon className={ className } />,
  };
  const icon = icons[pIcon];
  return icon;  
};