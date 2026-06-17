import './App.css';

import { Header, Footer } from './components'; 
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      
      <Header> header</Header>
      <AllRoutes />
      <Footer> footer</Footer>

    </div>
  );
}

export default App;
