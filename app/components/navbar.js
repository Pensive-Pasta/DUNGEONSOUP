"use client";

import Link from "next/link";
import Image from "next/image";
import { React, useState } from "react";
import "./styles.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav>
      <Link href="/">
        <Image src="/images/dxs.svg" alt="Site Logo" width={50} height={50} />
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
              width={20}
              height={20}
            />
          </button>
          {showSearch && (
            <input
              type="text"
              placeholder="Search authors..."
              className="searchBar"
            />
          )}
        </div>

        <div>
          <Link className="link" href="/#about">
            About
          </Link>
          <Link className="link" href="/#articles">
            Articles
          </Link>
          <Link className="link" href="/#subscribe">
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
