import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@material-ui/icons/Close'


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
      <BurgerNav>
        <CloseWeapper>
          <CustomClose />
        </CloseWeapper>
          <li><a href='https://www.tesla.com/models'>Model S</a></li>
          <li><a href='https://www.tesla.com/model3'>Model 3</a></li>
          <li><a href='https://www.tesla.com/modelx'>Model X</a></li>
          <li><a href='https://www.tesla.com/modely'>Model Y</a></li>
          <li><a href='#'>Cyber Truck</a></li>
          <li><a href='#'>Charger</a></li>
          <li><a href='#'>Shop</a></li>
          <li><a href='#'>Account</a></li>
          <li><a href='#'>Discover</a></li>
          <li><a href='#'>Energy</a></li>


      </BurgerNav>
     
    
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
  z-index: 1;

  
  
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, .2);

        a{
            font-weight: 900;
        }
  }

`



const CustomClose = styled(CloseIcon)`


`

const CloseWeapper = styled.div`
  display: flex;
  justify-content: flex-end;

`