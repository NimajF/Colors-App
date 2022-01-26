import { useState } from 'react';
import Palette from './Palette';
import seedsColors from './seedsColors';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';


function App() {
const [newPalettes, setNewPalette] = useState(seedsColors)
  const handleSavePalette = newSavedPalette => {
    setNewPalette([...newPalettes, newSavedPalette])
    
    
}


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={newPalettes}/>}/>
        <Route exact path="/palette/new" element={<NewPaletteForm handleSavePalette={handleSavePalette} palettes={newPalettes} />}/>
        <Route exact path="/palette/:id" element={<Palette palettes={newPalettes}/>} />
        <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette palettes={newPalettes} />} />
      </Routes>
      {/* <div className="App">
        <Palette palette={generatePalette(seedsColors[4])} />
      </div> */}
    </Router>
    
  );
}

export default App;
