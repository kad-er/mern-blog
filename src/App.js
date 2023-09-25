//pages import home from './pages/home'
import Home from './pages/home'
import About from './pages/about'
import ArticlesList from './pages/articleslist'
import Article from './pages/article'
import Notfound from './pages/notfound'
//import brower router as Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
function App() {
  return (
   
      <Router>
         <Navbar/>
        <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/articles" element={<ArticlesList />}></Route>
          <Route path="/articles/:name" element={<Article />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
