
import {
  cloneElement,
  Children,
  isValidElement
} from "react"

import {
  IconButton
} from './IconButton';

import clsx from 'clsx';

export const Menubar = props => {

	const pLogo = props.logo;
	const pMenus = props.menus;

  return (
    <div
      className={ 'w-full flex' } >

      {
        Children.map(pLogo, (child) =>
          cloneElement( child, {
              style: { ...child.props.style, position: "relative" },
          }) )
      }

      <div
        className={ 'w-full flex px-10' } >

        <div
          className={ 'w-full flex gap-10' } >
          {
            Children.map(pMenus, (child) =>
              cloneElement( child, {
                  style: { ...child.props.style, position: "relative" },
              }) )
          }
        </div>

        <IconButton
          theme={ 'light' }
          icon={ 'ICON_MENU' } />

      </div>

    </div>
  );
};

