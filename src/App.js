import './App.css'
import {Provider} from 'react-redux'
import store from './redux/store'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'


function App() {
  return (
    
    <Provider store={store}>
      <Navbar/>
      <Cards/>
    </Provider>
  
  );
}

export default App;
