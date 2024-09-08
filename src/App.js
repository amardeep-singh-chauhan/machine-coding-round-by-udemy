import './App.css';
import Crousel from './Components/Crousel/Crousel';
import Search from './Components/Search/Search';
import SortedTable from './Components/SortedTable/SortedTable';
import StarRating from './Components/StarRating/StarRating';
import Stopwatch from './Components/Stopwatch/Stopwatch';

function App() {
  return (
    <div className="App">
      <StarRating limit={5} rating={2}/>
      <hr />
      <Search />
      <hr />
      <Crousel />
      <hr />
      <SortedTable />
      <hr />
      <Stopwatch />
      <hr />
    </div>
  );
}

export default App;
