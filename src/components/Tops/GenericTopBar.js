import styled from "styled-components";
import condoshoplogomini from "../../assets/condoshopmini.png"
import User from "../User";
import { Link, useNavigate } from 'react-router-dom';

export default function GenericTopBar() {

  const navigate = useNavigate();

  return (
    <Container>
      <Logo> 
        <img onClick={()=>navigate("/createrecommendations")} src={condoshoplogomini} alt="logo" />
      </Logo>
      
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
    font-size: 15px;
    color: #000000;
  }
  ion-icon{
        color:white;
        width: 40px;
        height: 40px;
    }

`

const Logo = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  img{
    border-radius: 10px;
    width: 90px;
    height: 90px;
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
