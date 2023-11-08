"use client";

import Link from "next/link";
import Image from "next/image";
import { React, useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm.length > 2) {
      fetch(`https://dungeonsoup-backend.onrender.com/articles/search/${searchTerm}`)
        .then((response) => response.text())
        .then((data) => setSearchResults(JSON.parse(data)))
        .catch((error) => console.error("Error fetching author data:", error));
    }
  };

  const resetSearch = () => {
    setSearchResults([]);
    setSearchTerm("");
    setShowSearch(false);
  };

  return (
    <nav>
      <Link href="/">
        <Image
          className="logo"
          src="/images/dxs.svg"
          alt="Site Logo"
          width={50}
          height={50}
        />
      </Link>

      <div className="outerSearchContainer">
        <div className="searchContainer">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="searchButton"
          >
            <Image
              src="/images/search.svg"
              alt="Search"
              width={18}
              height={18}
            />
          </button>
          {showSearch && (
            <>
              <input
                type="text"
                placeholder="Search by title..."
                className="searchBar"
                onChange={handleSearch}
              />
              {searchTerm.length > 2 && (
                <div className="overlay">
                  {searchResults.length > 0 ? (
                    searchResults.map((article) => (
                      <Link
                        className="search-result"
                        href={`/${article.author_id}/${article.article_id}`}
                        onClick={resetSearch}
                        key={article.article_id}
                      >
                        {article.title}
                      </Link>
                    ))
                  ) : (
                    <p>No results found</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        <div>
          <Link className="link" href="/#articles">
            Articles
          </Link>
          <Link className="link" href="/#about">
            About
          </Link>
          <Link className="linksub" href="/#subscribe">
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
