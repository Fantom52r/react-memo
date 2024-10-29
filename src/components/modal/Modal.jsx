import React from "react";
import ReactDOM from "react-dom";
// import styles from "../Card/Card.module.css";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  return ReactDOM.createPortal(<>{children}</>, modalRoot);
};

export default Modal;
