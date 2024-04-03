import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import ProduitList from './Components/Learning/Product/ProduitList';
import Learning from './Components/Learning/Learning';
import FormsMain from './Components/Learning/Forms/FormsMain';
import TheLogin from './Components/Auth/TheLogin';

function App() {
  // ......


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/learning'>Learning</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/forms'>Forms</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/learning' element={<Learning />} />
          <Route path='/' element={<Home text="This is the main area of the cool application" list={ProduitList()} />} />
          <Route path='/login' element={<TheLogin />} />
          <Route path='/forms' element={<FormsMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
