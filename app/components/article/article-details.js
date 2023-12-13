"use client";
import { calculateReadTime } from "@/app/utils/calculateReadTime";
import { useState } from "react";
import Image from "next/image";
import { updateArticleLikes } from "@/app/api/article-api";

const ArticleDetails = ({ likes, authorName, content, articleId }) => {
  const [pageIsLiked, setPageIsLiked] = useState(
    () => JSON.parse(localStorage.getItem(`liked-${articleId}`)) || false
  );
  const [likeCount, setLikeCount] = useState(likes || 0);

  const handleLike = async () => {
    try {
      const response = await updateArticleLikes(articleId, !pageIsLiked);
      if (response) {
        const isPageCountAdded = !pageIsLiked;
        const newLikeCount = isPageCountAdded ? likeCount + 1 : likeCount - 1;
  
        setLikeCount(newLikeCount);
        setPageIsLiked(!pageIsLiked);
  
        localStorage.setItem(`liked-${articleId}`, JSON.stringify(!pageIsLiked));
      }
    } catch (error) {
      console.error("Error updating like status:", error);
    }
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
