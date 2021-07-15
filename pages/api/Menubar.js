
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
      { pLogo }

      <div
        className={ 'w-full flex px-10' } >

        <div
          className={ 'w-full flex gap-10' } >
          { pMenus }
        </div>

        <IconButton
          theme={ 'light' }
          icon={ 'ICON_MENU' } />

      </div>

    </div>
  );
};

