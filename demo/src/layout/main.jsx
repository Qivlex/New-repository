import React from "react";
import { Movies } from "../components/movies";
import { Search } from "../components/search";
import { Preloader } from "../components/preloader";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    };
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=ЗДЕСЬ&s=matrix`)
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    searchMovies = (str, type = "all") => {
        fetch(
            `http://www.omdbapi.com/?apikey=ЗДЕСЬ&s=${str}${ 
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search, loading: false }));
    }

    render() {
        const { movies, loading } = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {loading ? <Preloader/> : <Movies movies={this.state.movies}/>}
        </main>
    }
}
export { Main };

// function Main() {
//     return <main className="container content">
//         Hello from Movies App
//     </main>
// }
// export {Main};