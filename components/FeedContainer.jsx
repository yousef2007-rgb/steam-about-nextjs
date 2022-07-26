import React from "react";
import { useEffect } from "react";

export default function FeedContainer() {
  const getData = () => {
    fetch(
      "https://ig.instant-tokens.com/users/cff4c92a-77e3-4614-a92b-feac0b0c5ee8/instagram/17841453770185410/token.js?userSecret=bcreqvurv1w5vhorbg7x3a"
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => getData(), []);

  return <div></div>;
}
