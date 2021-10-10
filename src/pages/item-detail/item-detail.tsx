import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ICard } from '../../interfaces/card.interface';
import { IURLParams } from '../../interfaces/globals.interface';
import { GraphQLService } from '../../services/graphql.service';
import './item-detail.css';

export const Detail: React.FC = () => {
  const { path } = useParams<IURLParams>();

  const query = `{
    itemCollection(where: {
      path: "/${path}"
    }) {
      items {
        sys {
          id
        }
        title
        price
        description
        itemImage{
        url
        }
        path
      }
    }
  }`;

  const [detail, setDetailPage] = useState<ICard>();
  useEffect(() => {
    const gqlService = new GraphQLService();
    const data = gqlService.fetch('POST', query);
    data
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setDetailPage(data.itemCollection.items[0]);
      });
  }, [query]);

  return (
    <div className="container">
      {detail && (
        <div className="item-detail-wrapper">
          <img src={detail?.itemImage?.url} alt="item-img" />
          <div className="item-detail-details">
            <h2>{detail?.title}</h2>
            <p>{detail?.price}</p>
            <p>{detail?.description}</p>
            <div className="item-detail-actions">
              <div className="item-btn">
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};