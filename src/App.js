
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Feed from './components/feed';
import Header from './components/header'
import VideoDetail from './components/videoDetail';
import { ContextProvider } from './context/contextApi';
import './styles.css';

import SearchResult from './components/searchResult';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch/:videoId" element={<VideoDetail />} />
          <Route path="/search-result/:query" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;