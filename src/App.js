import Palette from './Palette';
import seedsColors from './seedsColors';
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedsColors[4])} />
    </div>
  );
}

export default App;
