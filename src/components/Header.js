import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
  return (
    <Container>
      <a href='https://www.tesla.com/modely' >
        <img src='/images/logo.svg' alt='Tesla logo' />
      </a>
      <Menu>
         <a href='https://www.tesla.com/models'>Model S</a>
         <a href='https://www.tesla.com/model3'>Model 3</a>
         <a href='https://www.tesla.com/modelx'>Model X</a>
         <a href='https://www.tesla.com/modely'>Model Y</a>

      </Menu>
      <RightMenu>
        <a href='https://shop.tesla.com/'>Shop</a>
        <a href='https://auth.tesla.com/en_us/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US'>Tesla Account</a>
        <CustomMenu />

      </RightMenu>
     
    
    </Container>
  )
}

export default Header


const Container = styled.div`
  min-height: 50px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;

  
  
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  

  a{
     font-weight: 900;
     text-transform: uppercase;
     padding: 0 10px;
     flex-wrap: nowrap;
     
  }

  @media (max-width : 780px) {
    display: none;
    
  }
`


const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
     font-weight: 900;
     text-transform: uppercase;
     margin-right: 10px;
     flex-wrap: nowrap;
     
  }
`


const CustomMenu = styled(MenuIcon)`
  cursor: pointer;

`