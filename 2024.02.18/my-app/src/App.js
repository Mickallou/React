import './App.css';
import PageHeader from './Components/PageHeader';
import Home from './Components/Home'
import FooterPage from './Components/FooterPage';
import ProduitList from './Components/ProduitList';

function App() {
  return (
    <div className="App">
      <PageHeader title="App Title" name="Mickael" />
      <Home text="This is the main area of the cool application" list={ProduitList()} />
      App component works!
      <FooterPage />
    </div>
  );
}

export default App;
