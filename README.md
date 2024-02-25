# Current-News-Chrome-Extension

This is a simple Chrome extension that allows users to fetch and read news articles from the News API.

## Features

- Fetch news articles by category: Sports, Medical, Science & Innovation, Film Industry, Politics.
- Display top headlines for the selected category.
- Open news articles in a new tab for reading.

## Demo

 <img alt="Demo" src="news extension 2.png" />

## Installation

1. Clone or download the repository to your local machine.
2. Obtain an API key from the News API website (https://newsapi.org/).
3. Create a file named `apiKeys.js` in the root directory of the extension and store your API key as follows:
   ```javascript
   const apiKey = 'YOUR_NEWS_API_KEY';
   export default apiKey;
   ```
   Replace `'YOUR_NEWS_API_KEY'` with your actual News API key.
4. Open Google Chrome and go to `chrome://extensions/`.
5. Enable Developer mode (toggle switch in the top right corner).
6. Click on the "Load unpacked" button and select the directory where you cloned/downloaded the extension.
7. The extension should now be loaded and visible in your Chrome browser.

## Usage

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. By default, the extension fetches sports news articles. You can click on the buttons for other categories to fetch news articles for that category.
3. Click on a news headline to open the article in a new tab for reading.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
