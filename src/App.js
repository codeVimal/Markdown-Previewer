import logo from './logo.svg';
import './App.css';
import MarkdownPreviewer from './MarkdownPreviewer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About'
import Layout from './Layout';
import Help from './Help';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MarkdownPreviewer/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Help" element={<Help/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
