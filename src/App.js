import { useState, useEffect, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import NotFound from './NotFound';
import customSeedColors from './customSeedColors';
import seedsColors from './seedsColors';


function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
  const [newPalettes, setNewPalette] = useState(savedPalettes || customSeedColors);
  
  const handleSavePalette = useCallback(newSavedPalette => {
    setNewPalette(np => [...np, newSavedPalette]);
  }, []);

  const deletePalette = useCallback(paletteId => {
    setNewPalette(np => np.filter(palette => palette.id !== paletteId))
  }, [])

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(newPalettes));
  }, [newPalettes]);


  const allPalettes = useMemo(() => [...newPalettes, ...seedsColors], [newPalettes])

  return (
    
      <Routes>
        <Route exact path="/" element={<PaletteList palettes={newPalettes} deletePalette={deletePalette} />}/>
        <Route exact path="/palette/new" element={<NewPaletteForm handleSavePalette={handleSavePalette} palettes={newPalettes} />}/>
        <Route exact path="/palette/:id" element={<Palette palettes={allPalettes}/>} />
        <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette palettes={allPalettes} />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    
    
  );
}

export default App;
