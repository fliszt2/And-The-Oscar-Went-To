import React from 'react';

var InfoModal = ({ handleClose, showModal, info }) => {
  var showHideClassName = showModal ? "modal display-block" : "modal display-none";

  if (info.nytimes) {
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <h4>{info.headline}</h4>
          <br></br>
          <h6>by {info.byline.toLowerCase().split(' ').map((name) => name[0].toUpperCase() + name.slice(1)).join(' ')}</h6>
          <br></br>
          <span>{info.summary_short}</span>
          <br></br>
          <br></br>
          <a href={info.link.url} target='blank'><span className='additional-text'>Read the full review</span></a>
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
          <h4>{info.Title}, {info.Year}</h4>
          <br></br>
          <h6>Rated: {info.Rated}</h6>
          <br></br>
          <span>{info.Plot}</span>
          <br></br>
          <br></br>
          <button type="button" onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  }

}

export default InfoModal;