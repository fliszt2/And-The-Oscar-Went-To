import React from 'react';
import Winner from './Winner.jsx';

const WinnersList = ({ winners, year }) => {
  if (year === 0) {
    return (
      <div className='container-placeholder'>
        <img className='placeholder' id='oscar' src='../img/oscar.jpg'></img>
      </div>
    );
  }
  return (
    <div className='container-winners'>
      <Winner year={year} category='picture' displayName={winners.picture.Nominee} title={winners.picture.Nominee} review={winners.review} />
      <Winner year={year} category='director' displayName={winners.director['Additional Info']} title={winners.director.Nominee} />
      <Winner year={year} category='actress' displayName={winners.actress.Nominee} title={winners.actress['Additional Info'].slice(0, winners.actress['Additional Info'].indexOf('{') - 1)} />
      <Winner year={year} category='actor' displayName={winners.actor.Nominee} title={winners.actor['Additional Info'].slice(0, winners.actor['Additional Info'].indexOf('{') - 1)} />
    </div>
  );
};

export default WinnersList;
