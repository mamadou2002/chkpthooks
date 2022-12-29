import Card from "./components/MovieCard";
import Movie from './components/MovieList'
import Filter from "./components/Filter"
import addMovie from "./components/addMovie"

function App() {
	return (
		<div>
			
			<Filter/>
            <Movie/>
			<Card/>
			<addMovie/>

			
		</div>
	)
}

export default App;
