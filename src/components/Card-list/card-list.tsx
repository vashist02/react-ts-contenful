import React, { useState, useEffect } from "react";
import { Icard } from "../../Interfaces/interface";
import Card from "../Card/card";
import "./card-list.css";

const query = `{
  itemCollection {
    items {
      title
      price
      itemImage{
       url
      }
    }
  }
}`;

const CardList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState<any[]>([]);
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/76jj62xpt2d9/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer azbZ5N6rZGDiRgyzuSGaGaX1TxrC6fRvkSUvMBWhqdk",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.itemCollection.items);
      });
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="card-list">
        {page && page
          .filter((val) => {
            return val ? searchTerm === "" || val.title
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) : ''
          })
          .map((item: Icard) => (
            <Card
              key={item.title}
              title={item.title}
              price={item.price}
              itemImage={{
                url: item.itemImage?.url,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default CardList;
