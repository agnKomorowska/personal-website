import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import Timeline from './components/timeline/Timeline';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Articles from './components/articles/Articles';
import Article from './components/articles/Article';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes className="routes">
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/articles" element={<Articles />} />
        <Route path="/article" element={<Article />} />

        <Route exact path="/" element={<Home />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
