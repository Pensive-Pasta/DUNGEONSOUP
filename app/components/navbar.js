"use client";

import Link from "next/link";
import Image from "next/image";
import { React, useState, useEffect, useRef } from "react";
import { fetchSearchResults } from "../api/article-api";
import "./styles.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBarRef]);

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 2) {
      try {
        const results = await fetchSearchResults(term);
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
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
        <div className="searchContainer" ref={searchBarRef}>
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
