import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import Logo from "../image/logo.png";

const QUERY = gql`
  query itorok {
    itorok
  }
`;

function Home() {
  const { data } = useQuery(QUERY);
  return (
    <div>
      {data?.itorok}
      <img alt="test" src={Logo} />
    </div>
  );
}

export default Home;
