import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import RecommendationTopBar from './Tops/TopBarRecommendations';
import { UserContext } from '../contexts/UserContext';
// import Button from './Support/Button';
// import Input from './Input';
// import ItemRecommend from './ItemRecommend';

export default function RecommendationsPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
   
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };

    const request = axios.get('http://localhost:4000/recommendations', config);

    request.then(response => {
      setItems(response.data);
    });

    request.catch(error => {
      console.log(error);
    });
  }, []);

  // function buildItems() {
  //   if (items) {
  //     return items.map(item => <Item key={item.id} item={item} />);
  //   }

  //   return 'Não há items a serem visualizados!';
  // }

  return (
    
      <Container>
        <RecommendationTopBar />
        <InfoRoute>
            <h2> O que você deseja que nossa loja venda? Insira abaixo! </h2>
        </InfoRoute>
        {/* {buildItems()} */}
      </Container>

  );
}


const InfoRoute=styled.div`
    display: flex;
    justify-content: center;
    h2{
        font-weight: bolder;
    }


`

const Container = styled.div`
  margin: auto;
  min-height: 100vh;
  width: 80%;
  padding: 27px 20px;
  background-color: #38b6ff;
`;
