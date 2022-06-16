import NavBar from './components/Navbar/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer id='3'/>
      <Footer webSite={'Tejidoteado Porteño DECO'} year={2022}/>
    </div>
  );
}

export default App;