

document.addEventListener('DOMContentLoaded', function () {
    // Fetch sports news by default
    fetchNewsByCategory('sports');

    // Add event listeners to category buttons
    document.getElementById('General-btn').addEventListener('click', () => fetchNewsByCategory('General'));

    document.getElementById('sports-btn').addEventListener('click', () => fetchNewsByCategory('Sports'));
   
    document.getElementById('science-btn').addEventListener('click', () => fetchNewsByCategory('Technology'));
    document.getElementById('film-btn').addEventListener('click', () => fetchNewsByCategory('Entertainment'));
    
});

function fetchNewsByCategory(category) {
    // URL for fetching news by category
    const apiKey = '60f2e52c48214ec29271a1f22487ac42';
    const apiUrl = `https://newsapi.org/v2/top-headlines?category=${category}&country=in&apiKey=${apiKey}`;

    // Fetch request to the News API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the response data and populate news headlines
            displayNewsHeadlines(data.articles);
        })
        .catch(error => {
            console.error('There was a problem fetching news:', error.message);
            // Optionally, display an error message to the user in the popup
        });
}

function displayNewsHeadlines(articles) {
    const newsList = document.getElementById('news-list');

    // Clear any existing news headlines
    newsList.innerHTML = '';

    // Populate the news headlines
    articles.forEach(article => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = article.title;
        a.href = article.url;
        a.target = '_blank'; // Open links in a new tab
        li.appendChild(a);
        newsList.appendChild(li);
    });
}
