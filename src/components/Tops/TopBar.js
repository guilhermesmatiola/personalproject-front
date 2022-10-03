import styled from "styled-components";
import condoshoplogomini from "../../assets/condoshopmini.png"
import User from "../User";
import { Link, useNavigate } from 'react-router-dom';

export default function TopBar() {

  const navigate = useNavigate();

  return (
    <Container>
      <Logo> 
        <img onClick={()=>navigate("/createproduct")} src={condoshoplogomini} alt="logo" />
      </Logo>
      <Column>
      <ion-icon onClick={()=>navigate("/recommendations")} name="create-sharp"></ion-icon>
        <h2>Sugerir produto</h2>
      </Column>
      <User />
    </Container>
  );
}

const Column=styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60px;
  //justify-content: center;
  h2{
    display: flex;
    align-items: center;
    
    font-size: 15px;
    color: #000000;
  }
  ion-icon{
        color:white;
        width: 30px;
        height: 30px;
    }

`

const Logo = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 10px;
    width: 60px;
    height: 60px;
  }
  margin-bottom: 10px;

`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
  border-bottom: 2px solid white;
  box-sizing: border-box;
  box-shadow: 2px whitesmoke;
`;
