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
        className={ 'flex flex-col gap-1' } >

        <div
          className={ 'w-screen flex' } >
          <Logo/>
          <div
            className={ 'w-full flex gap-10 px-10' } >

            <NavItem
              text={ 'Adult & College Students'}
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
              text={ 'Adult & College Students'}
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
        </div>

        <RoundButton
          text={ 'cool buttons' } />
        <RoundButton
          text={ 'wow now cow' } />
        <PillButton
          text={ 'Explore Summer at Harvard'}
          theme={ 'crimson' } />
        <PillButton
          text={ 'Explore Winter at Yale'}
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
          theme={ 'dark' }
          icon={ 'ICON_MENU' } />
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