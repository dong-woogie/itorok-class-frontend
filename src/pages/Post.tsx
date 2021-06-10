import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";

interface PostProps {
  name: string;
}

const QUERY = gql`
  query post {
    post
  }
`;

function Post({ name }: PostProps) {
  const { data } = useQuery(QUERY);
  return (
    <div>
      <p>PostPage</p>
      <p>{name}</p>
      <p>{data?.post}</p>
    </div>
  );
}

export default Post;
