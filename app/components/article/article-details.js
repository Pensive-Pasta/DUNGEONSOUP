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
        <button onClick={handleLike} className="like-button">
          <Image
            className="like-count"
            src={pageIsLiked ? "/images/heart.svg" : "/images/empty_heart.svg"}
            alt="heart"
            width={15}
            height={12}
          />
          {likeCount}
        </button>
        Published by {authorName} | {calculateReadTime(content)} min read
      </p>
    </div>
  );
};

export default ArticleDetails;
