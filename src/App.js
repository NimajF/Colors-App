import Palette from './Palette';
import seedsColors from './seedsColors';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={seedsColors}/>}/>
        <Route exact path="/palette/new" element={<NewPaletteForm/>}/>
        <Route exact path="/palette/:id" element={<Palette/>} />
        <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette/>} />
      </Routes>
      {/* <div className="App">
        <Palette palette={generatePalette(seedsColors[4])} />
      </div> */}
    </Router>
    
  );
}

export default App;
