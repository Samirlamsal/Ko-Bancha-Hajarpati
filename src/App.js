import './App.css';
import Game from './pages/game';
import Homepage from './pages/homepage';
import Game2 from './pages/game2';
import Game3 from './pages/game3';
import Game4 from './pages/game4';
import Game5 from './pages/game5';
import Game6 from './pages/game6';
import Game7 from './pages/game7';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/game1' element={<Game />}></Route>
          <Route exact path='/game2' element={<Game2 />}></Route>
          <Route exact path='/game3' element={<Game3 />}></Route>
          <Route exact path='/game4' element={<Game4 />}></Route>
          <Route exact path='/game5' element={<Game5 />}></Route>
          <Route exact path='/game6' element={<Game6 />}></Route>
          <Route exact path='/game7' element={<Game7 />}></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
