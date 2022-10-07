import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
// import FloatingCartButton from './FloatingCartButton';
import Item from './Item';
import TopBar from './Tops/TopBar';
import InsertButton from './Support/InsertProductButton';

import CartContext from '../contexts/CartContext';
import { UserContext } from '../contexts/UserContext';

export default function MarketPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [cart, setCart] = useState([]);

  const context = useContext(UserContext);
  const userMaster = context.user.user;

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
  // console.log(cart)
  
  // function BuyItems(){
  //   let t1=encodeURIComponent("Olá, gostaria de fazer o pedido:\n ");
  //   let finalValue=encodeURIComponent("\nTotal: R$ ");


  //     function finalizarPedido(){
  //         // let valorfinal = (2);

  //         let nome=userMaster.name;
  //         let endereco=userMaster.city;
  //         let t5=encodeURIComponent("\nNome: " + nome);
  //         let t6=encodeURIComponent("\nEndereço: " + endereco);

  //         // valorfinal=valorfinal.toFixed(2);
  //         // valorfinal=encodeURIComponent(valorfinal);
  //         window.open("https://wa.me/+5547996993721?text="+t1+finalValue+t5+t6);
        
  //     }
  // }

  function buildItems() {
    if (items) {
      return items.map(item => <Item key={item.id} item={item} />);
    }

    return 'Não há items a serem visualizados!';
  }

  if(userMaster.name==="master"){
    return (
      <CartContext.Provider value={{ cart, addToCart }}>
      <Margin>
      <TopBar />
        <Container>
          <InsertButton onClick={()=>navigate("/createproduct")} >Inserir mais produtos</InsertButton  >
          
          {buildItems()}
        </Container>
      </Margin>
    </CartContext.Provider>
    )
  }
  else{
    return (
      <CartContext.Provider value={{ cart, addToCart }}>
        <Margin>
        <TopBar />
          <Container>
            <h1>Adquira seus produtos abaixo!</h1>
            
            {buildItems()}
          </Container>
        </Margin>
      </CartContext.Provider>
    );
  }

  
}
const Margin = styled.div`
  margin-top: 100px;
  background-color: #38b6ff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    font-size: 15px;
  }
  align-items: center;
  margin-top: 100px;
  padding: 20px;
  background-color: #38b6ff;
  button{

  }
`;
