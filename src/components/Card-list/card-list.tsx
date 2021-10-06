import React, { useState, useEffect } from "react";
import { ICard } from "../../Interfaces/card.interface";
import { GraphQLService } from '../../services/graphql.service';
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
    const gqlService = new GraphQLService()
    const data = gqlService.fetch('POST', query)
    data.then((response) => response.json())
    .then(({ data, errors } ) => {
      if (errors) {
        console.error(errors)
      }
      setPage(data.itemCollection.items)
    })
  }, [])

  return (
    <div className="card-list-container">
      <div className="card-list-head">
        <h1>Produits Imitations En Promotion</h1>
        <p>Prend zot ban produits ki casser. Zis tout produits casser mais li ena chance marcher. <strong>We are better than Weshare.</strong>.</p>
        <p>Avoye nous zot billet monopoly par MCB Coffee.</p>
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="card-list">
        {page && page
          .filter((val) => {
            return val ? searchTerm === "" || val.title
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase()) : ''
          })
          .map((item: ICard) => (
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
