import React from "react";

interface IProps {
  text: string;
}

const NoResults = ({ text }: { text: string }) => {
  return <div>NoResults</div>;
};

export default NoResults;
