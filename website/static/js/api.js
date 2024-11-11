let categories = [];
let movies = [];

async function fetchCategories() {
    try {
        const response = await fetch('/api/categories');
        if (!response.ok) {
            throw new Error('Network response was not ok');
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
            throw new Error('Network response was not ok');
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
