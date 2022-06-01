import NavBar from './components/Navbar/NavBar';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header greeting={'DiSEñoS uNiCoS'} subTitle={'hechos a mano'}/>
      <ItemListContainer/>
      <Footer webSite={'Tejidoteado Porteño DECO'} year={2022}/>
    </div>
  );
}

export default App;
