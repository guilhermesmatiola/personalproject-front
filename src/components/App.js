import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Auth/LoginPage';
import MarketPage from './MarketPage';
import SignUpPage from './Auth/SignUpPage';
import RecommendationsPage from './Recommendations'
import CreateNewRecommendation from './createRecommendation/createRecommendation';

import { UserProvider } from '../contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<LoginPage />}/>
          <Route path="/sign-up" element= {<SignUpPage />}/>
          <Route path="/market" element = { <MarketPage />} />
          <Route path="/recommendations" element = { <RecommendationsPage />} />
          <Route path="/createrecommendations" element = { <CreateNewRecommendation />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
