import styled from "styled-components";
import condoshoplogomini from "../../assets/condoshopmini.png"
import User from "../User";
import { Link, useNavigate } from 'react-router-dom';

export default function RecommendationTopBar() {

  const navigate = useNavigate();

  return (
    <Container>
      <Logo> 
        <img onClick={()=>navigate("/market")} src={condoshoplogomini} alt="logo" />
      </Logo>
      <Column>
      <ion-icon onClick={()=>navigate("/market")} name="cart-sharp"></ion-icon>
        <h2>Adquirir produtos</h2>
      </Column>
      <User />
    </Container>
  );
}

const Column=styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2{
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 20px;
    color: #000000;
  }
  ion-icon{
        color:white;
        width: 60px;
        height: 60px;
    }

`

const Logo = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 10px;
    width: 100px;
    height: 100px;
  }
  margin-bottom: 10px;

`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  
`;
