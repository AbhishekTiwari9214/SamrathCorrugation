import React from 'react';
import Banner from '../components/Banner';
import ContactUs from '../components/ContactUs';
import Types from '../components/Types';
import  './home.css';

function Home() {
  return (
    <>
      <Banner />
    <p className='homePageHeading types'>Types of Corrugated Box</p> 
      <Types
        image="corrugatedRobot.png"
        title="Title 2"
        description="Description for the second section."
        isImageRight={false}
      />
      <Types
        image="corrugatedRobot.png"
        title="Title 2"
        description="Description for the second section."
        isImageRight={true}
      />
      <Types
        image="corrugatedRobot.png"
        title="Title 2"
        description="Description for the second section."
        isImageRight={false}
      />
      <div className='moreTypesButton'>

            <button>More Types</button>
      </div>
      <p className='homePageHeading'>Contact Us</p>
      <ContactUs/>
    </>
  );
}

export default Home;
