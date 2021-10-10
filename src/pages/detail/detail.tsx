import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ICard } from '../../Interfaces/card.interface';
import { IURLParams } from '../../Interfaces/globals.interface';
import { GraphQLService } from '../../services/graphql.service';

export const Detail: React.FC = () => {
  const { id } = useParams<IURLParams>();

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
        setDetailPage(data.item);
      });
  }, [query]);

  return (
    <div className="item-detail-container">
      {detail && <div>{detail?.title}</div>}
    </div>
  );
};
