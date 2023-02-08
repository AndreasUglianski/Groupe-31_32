
import './App.css';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';
import Header from './components/Header';
import Plans from './components/Plans';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Header />
      <Banner1 />
      <Products />
      <Banner2 />
      <Plans/>
    </div>
  );
}

export default App;
