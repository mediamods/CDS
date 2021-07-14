import {
  NavItem
} from './NavItem';

import {
  IconButton
} from './IconButton';

import {
  Logo
} from './Logo';

import clsx from 'clsx';

export const Menu = props => {

	const pLogo = props.logo;
	const pMenus = props.menus;

  return (
    <div
      className={ 'w-full flex' } >
      <Logo
      	logo={ pLogo } />

      <div
        className={ 'w-full flex px-10' } >

        <div
          className={ 'w-full flex gap-10' } >

         	{
			      pMenus.map( (item, idx) => {
         				console.log( 'item', item, 'menuText', item.menuText, 'menuItems', item.menuItems )

         			return (
	         			<NavItem
	         				key={ item.menuText }
	         				text={ item.menuText }
	         				items={ item.menuItems } />
         			);
         		} )

          }

        </div>

        <IconButton
          theme={ 'light' }
          icon={ 'ICON_MENU' } />

      </div>

    </div>
  );
};

