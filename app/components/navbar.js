"use client";

import Link from "next/link";
import Image from "next/image";
import { React, useState } from "react";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/dxs.svg"
              alt="Site Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <div className="search">
          <button onClick={() => setShowSearch(!showSearch)}>
            <Image
              src="/images/search.svg"
              alt="Search"
              width={30}
              height={30}
            />
          </button>

          {showSearch && <input type="text" placeholder="Search..." />}
        </div>

        <div className="links">
          <Link href="/#about">About</Link>
          <Link href="/#articles">Articles</Link>
          <Link href="/#subscribe">Subscribe</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
