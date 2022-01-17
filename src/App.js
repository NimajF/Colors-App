import Palette from './Palette';
import seedsColors from './seedsColors';

function App() {
  return (
    <div className="App">
      <Palette {...seedsColors[4]} />
    </div>
  );
}

export default App;
