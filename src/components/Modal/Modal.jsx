import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  return (
    <div className="modal-bg" id="modal">
      <div className="modal">
        <div className="modal-head">{props.title}</div>

        <div className="modal-body">{props.body}</div>

        <div className="modal-bottom">
          <button
            className="btn-modal"
            onClick={(e) => {
              document.getElementById("modal").style.visibility = "hidden";
            }}
          >
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
