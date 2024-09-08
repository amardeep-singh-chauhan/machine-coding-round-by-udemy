import './App.css';
import Crousel from './Components/Crousel/Crousel';
import Search from './Components/Search/Search';
import SortedTable from './Components/SortedTable/SortedTable';
import StarRating from './Components/StarRating/StarRating';
import Stopwatch from './Components/Stopwatch/Stopwatch';
import Todo from './Components/Todo/Todo';

function App() {
  return (
    <div className="App">
      <StarRating limit={5} rating={2}/>
      <Search />
      <Crousel />
      <SortedTable />
      <Stopwatch />
      <Todo />
    </div>
  );
}

export default App;
