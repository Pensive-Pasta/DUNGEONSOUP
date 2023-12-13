const BASE_URL= process.env.NEXT_PUBLIC_API_URL;

export const fetchLatestArticles = async () => {
    try {
        const response = await fetch(`${BASE_URL}/articles`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching articles", error);
        throw error;
    }
};

export const fetchAuthor = async (author_id) => {
    try {
      const response = await fetch(`${BASE_URL}/author/${author_id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching author data:", error);
      throw error;
    }
  };

  export const fetchArticlesByAuthor = async (author_id) => {
    try {
      const response = await fetch(`${BASE_URL}/articles/author/${author_id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const articles = await response.json();
      return articles;
    } catch (error) {
      console.error("Error fetching articles by author:", error);
      throw error;
    }
  };

  export const fetchArticle = async (article_id) => {
    try {
      const response = await fetch(`${BASE_URL}/articles/${article_id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const article = await response.json();
      return article[0];
    } catch (error) {
      console.error("Error fetching single article data:", error);
      throw error;
    }
  };

  export const fetchSearchResults = async (searchTerm) => {
    try {
      const response = await fetch(`${BASE_URL}/articles/search/${searchTerm}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const searchResults = await response.json();
      return searchResults;
    } catch (error) {
      console.error("Error fetching search results:", error);
      throw error;
    }
  };
  
  export const updateArticleLikes = async (articleId, like) => {
    try {
      const response = await fetch(
        `${BASE_URL}/articles/${articleId}/${like ? "like" : "dislike"}`,
        { method: "POST" }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.status === 200;
    } catch (error) {
      console.error("Error updating article likes:", error);
      throw error;
    }
  };
  