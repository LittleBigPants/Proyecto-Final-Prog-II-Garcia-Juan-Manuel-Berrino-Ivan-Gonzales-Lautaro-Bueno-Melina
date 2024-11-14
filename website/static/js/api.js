let categories = [];
let movies = [];

async function fetchCategories() {
    try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
            throw new Error("ayudaaaaaaa");
        }
        categories = await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function fetchMovies() {
    try {
        const response = await fetch('/api/movies');
        if (!response.ok) {
            throw new Error("ayudaaaaaaa");
        }
        movies = await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function inicializarData() {
    await Promise.all([fetchCategories(), fetchMovies()]);
}

export { categories, movies, inicializarData };
