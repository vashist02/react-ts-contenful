import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../common/button/button';
import './not-found.scss';

export const NotFound: React.FC = () => {
  const history = useHistory();

  const goBackHome = () => {
    history.push('/');
  };

  return (
    <div className="not-found__container">
      <h1 className="not-found__heading">
        This page or section cannot be found.
      </h1>
      <p className="not-found__text">
        Please visit or navigate to another page instead. Or contact the
        administrators of this website.
      </p>
      <Button
        className="primary"
        copy="Back to Home"
        onClick={() => goBackHome()}
      />
    </div>
  );
};
