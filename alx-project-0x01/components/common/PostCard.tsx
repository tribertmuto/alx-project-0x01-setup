import React from "react";

interface PostCardProps {
  title: string;
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, description }) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PostCard;
