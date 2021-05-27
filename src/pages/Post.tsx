import React from "react";

interface PostProps {
  name: string;
}

function Post({ name }: PostProps) {
  return (
    <div>
      <p>PostPage</p>
      <p>{name}</p>
    </div>
  );
}

export default Post;
