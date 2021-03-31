import React from 'react';

var InfoModal = ({ handleClose, showModal, review }) => {
  var showHideClassName = showModal ? "modal display-block" : "modal display-none";
  var byline = review.byline.toLowerCase().split(' ').map((name) => name[0].toUpperCase() + name.slice(1)).join(' ');

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h4>{review.headline}</h4>
        <br></br>
        <h6>by {byline}</h6>
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
}

export default InfoModal;