"use client";
import { useState } from "react";

const ArticleDetails = ({ authorId, readTime, likes, blogId, authorName }) => {
  const [pageIsLiked, setPageIsLiked] = useState(false);
  const handleLike = () => {
    // add or minus likes onclick using post with blogId
    setPageIsLiked(!pageIsLiked);
  };

  return (
    <div>
      <p>
        Published by {authorName} | {readTime} min read | <svg /> {likes}{" "}
      </p>
      {/* change heart fill based on liked/not liked status  */}
    </div>
  );
};

export default ArticleDetails;
