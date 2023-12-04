import './App.css'
import Slider from './components/Slider/Slider';
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
function App() {
  return (
    <div className="App">
         <div className="AppGlass">
        <Slider/>
        <MainDash/>
        <RightSide/>
         </div>
    </div>
  );
}

export default App;
