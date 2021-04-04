import React from 'react';
import PropTypes from 'prop-types';
import { BiRightArrowAlt } from 'react-icons/bi';

const Card = ({ cardIcon, cardTitle, cardText, cardFooter }) => {
  return (
    <>
      <div className="card">
        <div className="card-title">
          <span>
            {cardIcon}
          </span>
          <span>{cardTitle}</span>
        </div>
        <div className="card-text">
          <p>
          {cardText}
          </p>
        </div>
        <div className="card-footer">
          <span>{cardFooter}</span>
          <span><BiRightArrowAlt className='card-footer-icon faa-horizontal animated'/></span>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  cardIcon: null,
  cardTitle: 'card title?',
  cardText: 'card text?',
  cardFooter: 'card footer?'
}

Card.propTypes = {
  cardIcon: PropTypes.element,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  cardFooter: PropTypes.string
}

export default Card;
