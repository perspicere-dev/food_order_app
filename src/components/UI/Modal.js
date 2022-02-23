import { Fragment } from 'react/cjs/react.production.min';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {/* <Backdrop />                                      can use like this without portal
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
