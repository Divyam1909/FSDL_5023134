const API_KEY = "826de19a1c5f42889d32ce2a1cb43430" // Replace with your actual API key

function fetchNews() {
  fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const newsContainer = document.getElementById("news-container")
      newsContainer.innerHTML = ""

      data.articles.forEach((article) => {
        const newsItem = document.createElement("div")
        newsItem.classList.add("news-item")
        newsItem.innerHTML = `
                    <h3>${article.title}</h3>
                    <img src="${article.urlToImage}" alt="${article.title}">
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank">Read more</a>
                `
        newsContainer.appendChild(newsItem)
      })
    })
    .catch((error) => {
      console.error("Error:", error)
      const newsContainer = document.getElementById("news-container")
      newsContainer.innerHTML = "<p>Unable to fetch news. Please try again later.</p>"
    })
}

fetchNews()

