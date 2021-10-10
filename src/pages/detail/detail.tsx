import React, { useState, useEffect } from "react";
import { ICard } from "../../Interfaces/card.interface";
import { GraphQLService } from "../../services/graphql.service";

const url = window.location.pathname;
const id = url.substring(url.lastIndexOf("/") + 1, url.length);
console.log('Detail loaded')

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
  const [detail, setDetailPage] = useState<ICard>();
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

  return (
    <div className="item-detail-container">
    {detail && (
      <div>{detail?.title}</div>
    )}
    </div>
  )
};
