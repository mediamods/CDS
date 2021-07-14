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

  return (
    <div
      className={ 'w-full flex' } >
      <Logo/>

      <div
        className={ 'w-full flex px-10' } >

        <div
          className={ 'w-full flex gap-10' } >
          <NavItem
            text={ 'About'}
            items={ [
              {
                text: 'Browse Courses',
                link: '/'
              },
              {
                text: 'Course Registration',
                link: '/'
              }
            ] }/>

          <NavItem
            text={ 'Leadership'}
            items={ [
              {
                text: 'Browse Courses',
                link: '/'
              },
              {
                text: 'Course Registration',
                link: '/'
              }
            ] }/>

          <NavItem
            text={ 'Our Programs'}
            items={ [
              {
                text: 'Browse Courses',
                link: '/'
              },
              {
                text: 'Course Registration',
                link: '/'
              }
            ] }/>
        </div>

        <IconButton
          theme={ 'light' }
          icon={ 'ICON_MENU' } />

      </div>
    </div>
  );
};

