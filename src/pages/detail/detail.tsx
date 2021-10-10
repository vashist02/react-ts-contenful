import React, { useState, useEffect } from "react";
import Card from "../../components/Card/card";
import { ICard } from "../../Interfaces/card.interface";
import { GraphQLService } from "../../services/graphql.service";

const url = window.location.pathname;
const id = url.substring(url.lastIndexOf("/") + 1, url.length);
console.log("test2", id);

const query = `{
    item (id: "${id}") {
    title
    price
    itemImage{
        url
    }
    path
    }
     
       
}`;
export const Detail: React.FC = () => {
  const [detail, setDetailPage] = useState();
  useEffect(() => {
    const gqlService = new GraphQLService();
    const data = gqlService.fetch("POST", query);
    data
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setDetailPage(data.item);
      });
  }, []);
  console.log("test1", detail.title);

  return <div></div>;
};
