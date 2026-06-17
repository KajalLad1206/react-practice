
import { ProductList } from './components/ProductList';

import './App.css';
import { ProductFetchHookEx } from './components/ProductFetchHookEx';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <ProductList />
      <ProductFetchHookEx />
    </div>
  );
}

export default App;
