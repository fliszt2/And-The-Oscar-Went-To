import React from 'react';

var InfoModal = ({ handleClose, showModal, review }) => {
  var showHideClassName = showModal ? "modal display-block" : "modal display-none";

  if (review.nytimes) {
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h4>{review.headline}</h4>
          <br></br>
          <h6>by {review.byline.toLowerCase().split(' ').map((name) => name[0].toUpperCase() + name.slice(1)).join(' ')}</h6>
          <br></br>
          <span>{review.summary_short}</span>
          <br></br>
          <br></br>
          <a href={review.link.url} target='blank'><span className='additional-text'>Read the full review</span></a>
          <br></br>
          <br></br>
          <button type="button" onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  } else {
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h4>{review.Title}, {review.Year}</h4>
          <br></br>
          <h6>Rated: {review.Rated}</h6>
          <br></br>
          <span>{review.Plot}</span>
          <br></br>
          <br></br>
          <button type="button" onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  }

}

export default InfoModal;