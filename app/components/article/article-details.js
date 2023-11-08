"use client";
import { calculateReadTime } from "@/app/utils/calculateReadTime";
import { useState } from "react";
import Image from "next/image";

const ArticleDetails = ({ likes, authorName, content, articleId }) => {
  const [pageIsLiked, setPageIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes || 0);

  const handleLike = () => {
    fetch(
      `https://dungeonsoup-backend.onrender.com/articles/${articleId}/${
        pageIsLiked ? "dislike" : "like"
      }`,
      {
        method: "POST",
      }
    )
      .then((response) => {
        if (response.status === 200) {
          const isPageCountAdded = !pageIsLiked;
          const newLikeCount = isPageCountAdded ? likeCount + 1 : likeCount - 1;
          setLikeCount(newLikeCount);
          setPageIsLiked(!pageIsLiked);
        }
      })
      .catch((error) => console.error("Error fetching article data:", error));
  };

  return (
    <div className="article-details">
      <p>
        Published by {authorName} | {calculateReadTime(content)} min read |{" "}
        <Image className="likeCount" src="/images/heart.svg" alt="heart" width={10} height={10} />
        {likeCount}
      </p>
      <button onClick={handleLike}>{pageIsLiked ? "DISLIKE" : "LIKE"}</button>
    </div>
  );
};

export default ArticleDetails;
