import React from 'react'
import Types from '../components/Types'

function TypesBox() {
  return (
    <>

        <p className='homePageHeading types'>Types of Corrugated Box</p>
     <Types
        image="corrugatedRobot.png"
        title="Title 2"
        description="Description for the second section."
        isImageRight={true}
      />
    </>
  )
}

export default TypesBox