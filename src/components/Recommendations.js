import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import RecommendationTopBar from './Tops/TopBarRecommendations';
import { UserContext } from '../contexts/UserContext';
import { FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

export default function RecommendationsPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLiked, setIsLiked] = useState(true);

  const [isFavorite, setIsFavorite] = useState(false);

  function toggleLike(){

      setIsLiked=(!isLiked);

  }

  async function onClickFavorite() {
        
    try {
        // await axios.post(`localhost:4000/posts/favorite`,)
  
        setIsFavorite(!isFavorite);
        
    } catch (e) {

    }
  }

  async function removeFavorite() {
      try {
          // await axios.delete(`localhost:4000/posts/delfavorite/`,);

          setIsFavorite(false);

      } catch (e) {
          console.log(e)

      }
  }
  

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


  return (
    
    <Edit>
        <RecommendationTopBar />
     <Container>
        
        <InfoRoute>
            <h2> O que você deseja que nossa loja venda? Insira abaixo! <br></br> Avalie também os produtos abaixo com "Gostei" ou "Não gostei" </h2>
        </InfoRoute>
        <AddRecommendation>
            <button >
              Adicionar <br></br> recomendação
            </button>
            {items.map((item, index)=>(
              <Recommendation>
                <Titles>
                <h1>{item.name}</h1>
                <h3>{item.description}</h3>
                </Titles>
                
                <img src={item.image} alt={item.name} />
                <h2> <h1>Preço: </h1>  R${item.price}</h2>

                <Score iconColor={isFavorite ? 'ABCDEF' : "FFFFFF"}>

                  <h4> {item.score} |</h4>
                  <ion-icon name="thumbs-up"></ion-icon>
                  <ion-icon name="thumbs-down"></ion-icon>
                  
                </Score>

              </Recommendation>
            ))}
        </AddRecommendation>
        
       
      </Container>
    </Edit>
    
    
     
  );
}
const Edit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Score = styled.div`
  margin-top: 5px;
  height: 30px;
  display: flex;
  flex-direction: row;
  h4{
    font-size: 20px;
    margin-right: 3px;
  }
  ion-icon{
    margin-left: 6px;
    margin-right: 4px;
    font-size: 25px;
    color: #${props => props.iconColor};
  }
`

const Recommendation = styled.div`
  margin-top: 20px;
  border: 10px solid whitesmoke;
  border-radius: 10px;
  box-shadow: 4px 4px grey;
  width: 150px;
  min-height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  img{
    height: 100px;
    width: 100px;
  }
  h2{
    display: flex;
    flex-direction: row;
    font-size: 20px;

    h1{
      color:red;
      font-size: 20px;
      margin-right: 2px;
    }
  }
`
const Titles = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    color:black;
    font-size: 28px;
  }
  h3{
    margin: 3px 3px 3px 0;
  }
`

const InfoRoute=styled.div`
    display: flex;
    justify-content: center;
    h2{
        font-weight: bolder;
    }
`
const AddRecommendation=styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button{
        font-weight: 700;
        min-width: 100px;
        height: 65px;
        margin-right: 10px;
        margin-left: 10px;
        text-align: center;
        background-color: white;
        color: blue;
        font-size: 21px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
  }      
`
const Container = styled.div`
  
  margin: auto;
  margin-top: 100px;
  min-height: 100vh;
  width: 80%;
  padding: 27px 20px;
  background-color: #38b6ff;
  z-index: -1;

`;
