import React from 'react'
import styled from "styled-components";
import Section from './Section';



function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        backgroundimage="model-s.jpg"
        description="Order online for Touchless Delivery"
        leftBtntext="Use you counter location"
        RighBtnText="Custom Order"
      />

      <Section
        title="Model 3"
        backgroundimage="model-3.jpg"
        description="Order online for Touchless Delivery"
        leftBtntext="Use you counter location"
        RighBtnText="Custom Order"
      />
      
      <Section 
        title="Model x"
        backgroundimage="model-x.jpg"
        description="Order online for Touchless Delivery"
        leftBtntext="Use you counter location"
        RighBtnText="Custom Order"
      />

      <Section 
        title="Model Y"
        backgroundimage="model-y.jpg"
        description="Order online for Touchless Delivery"
        leftBtntext="Use you counter location"
        RighBtnText="Custom Order"
      />

      <Section 
        title="Lowest Solar Panels in world"
        backgroundimage="solar-panel.jpg"
        description="Money-back guarante if you dont like"
        leftBtntext="Order Now"
        RighBtnText="Learn More"
      />
      <Section 
        title="Solar for new Home"
        description="Money-back guarante if you dont like"
        backgroundimage="solar-roof.jpg"
        leftBtntext="Order Now"
        RighBtnText="Learn More"
      />
      <Section 
        title="Car Charger"
        description="Fast car charger so that you never run out from the juice "
        backgroundimage="accessories.jpg"
        leftBtntext="Order Now"
        
      />


    </Container>
  )
}

export default Home


const Container = styled.div`
  height: 100vh;
  
`