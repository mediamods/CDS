import {
  Fragment
} from 'react';

import Head from 'next/head';

import {
  ArrowButton
} from './api/ArrowButton';

import {
  Catalog
} from './api/Catalog';

import {
  IconButton
} from './api/IconButton';

import {
  Logo
} from './api/Logo';

import {
  NavItem
} from './api/NavItem';

import {
  PillButton
} from './api/PillButton';

import {
  RoundButton
} from './api/RoundButton';

import {
  TextHeading
} from './api/TextHeading';

import {
  TextParagraph
} from './api/TextParagraph';

const Page = props => {

  return (
    <Fragment>

      <Head>
        {/*https://stackoverflow.com/questions/56213019/how-to-add-a-favicon-to-a-next-js-static-site*/}
        <link
          rel="shortcut icon"
          href="favicon.png" />
      </Head>

      <div 
        className={ 'flex flex-col gap-5' } >

        <div
          className={ 'w-screen flex' } >
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

        <TextHeading
          mainText={ 'Passion for teaching. Dedication to Growth.' }
          subText={ 'Accessible, exceptional higher education for leaners like you.' } />

        <TextParagraph
          text={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
        />


        <RoundButton
          text={ 'Learn More' } />
        <PillButton
          text={ 'Explore Summer at Harvard'}
          theme={ 'crimson' } />
        <PillButton
          text={ 'Explore Winter at Harvard'}
          theme={ 'crimson-light' } />
        <PillButton
          text={ 'Request Info'}
          theme={ 'dark' } />
        <ArrowButton
          text={ 'Arrow Button Wiggler'}
          visible={ true }
          left={ true }
          justify={ 'justify-start'} />
        <ArrowButton
          text={ 'Arrow Wrigger Right' }
          visible={ true }
          left={ false }
          justify={ 'justify-end' } />

        <IconButton
          theme={ 'light' }
          icon={ 'ICON_SEARCH' } />
        <IconButton
          theme={ 'light' }
          icon={ 'ICON_CLOSE' } />

        <Catalog
          items={ [
            {
              heading: 'Arts, Writing, and the Humanities',
              items: [
                {
                  text: 'Comparitive Literature',
                  link: '/'
                },
                {
                  text: 'Creative Writing',
                  link: '/'
                }
              ]
            },
            {
              heading: 'Business & Economics',
              items: [
                {
                  text: 'Management',
                  link: '/'
                },
                {
                  text: 'Economics',
                  link: '/'
                }
              ]
            }
          ] }/>
      </div>

    </Fragment>
  );

};

export default Page;