import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import FloatingCartButton from './FloatingCartButton';
import Item from './Item';
import TopBar from './Tops/TopBar';

import CartContext from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

export default function MarketPage() {
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

    const request = axios.get('http://localhost:4000/products', config);

    request.then(response => {
      setItems(response.data);
    });

    request.catch(error => {
      console.log(error);
    });
  }, []);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  function buildItems() {
    if (items) {
      return items.map(item => <Item key={item.id} item={item} />);
    }

    return 'Não há items a serem visualizados!';
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <Container>
        <TopBar />
        
        {buildItems()}
      </Container>
    </CartContext.Provider>
  );
}

const Container = styled.div`
  margin: auto;
  min-height: 100vh;
  width: 80%;
  padding: 27px 20px;
  background-color: #38b6ff;
`;