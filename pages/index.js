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
  InfoCard
} from './api/InfoCard';

import {
  InfoGridCell
} from './api/InfoGrid';

import {
  Logo
} from './api/Logo';

import {
  Menu
} from './api/Menu';

import {
  Menubar
} from './api/Menubar';

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

        <Menubar
          logo={ <Logo/> }
          menus={[
            (<Menu
                text={'item 1'}
                items={[
                  {text: 'yaya'},
                  {text: 'kaka'}
                ]} />),
            (<Menu
                text={'item 2'} />)
          ]}
        />

        <TextHeading
          heading={ 'Passion for teaching. Dedication to Growth.' }
          subHeading={ 'Accessible, exceptional higher education for leaners like you.' } />

        <TextParagraph
          text={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
        />

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


        <div
          className={ 'flex gap-10' } >
          <InfoCard 
            title={ 'Harvard Extension School' }
            text={ 'Harvard degrees, certificates and courses - online, in the evenings, and at your own pace.' }
          />
          <InfoCard 
            title={ 'Harvard Summer School' }
            text={ 'Harvard degrees, certificates and courses - online, in the evenings, and at your own pace.' }
          />
          <InfoCard 
            title={ 'Harvard Extension School' }
            text={ 'Harvard degrees, certificates and courses - online, in the evenings, and at your own pace.' }
          />
        </div>

        <div
          className={ 'grid grid-cols-2 gap-10 w-fit' } >

          <InfoGridCell
            title={ '70 degrees & certificates' }
            text={ 'Harvard Extension School' } />
          <InfoGridCell 
            title={ '110 years' }
            text={ 'Distance Education trailblazers' } />
          <InfoGridCell
            title={ '120' }
            text={ 'Professional Development programs' } />
          <InfoGridCell
            title={ '60 countries' }
            text={ 'Harvard Summer School' } />
          <InfoGridCell
            title={ '29,000' }
            text={ 'Harvard Extension Alumni Association members' } />
          <InfoGridCell
            title={ '550 members' }
            text={ 'Harvard Institute for Learning in Retirement' } />

        </div>

        <Catalog
          items={ [
            {
              title: 'Arts, Writing, and the Humanities',
              child:
                (<div>ok1</div>)
            },
            {
              title: 'Business & Economics',
              child:
                (<div>ok1</div>)
            }
          ] }/>
      </div>

    </Fragment>
  );

};

export default Page;