import React from "react";
import Modal from "@material-ui/core/Modal";
import * as S from "./styles";
import { Button } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const SimpleModal = ({ isModalOpen, setModalOpen }) => {
  return (
    <div>
      <Modal
        aria-labelledby="confirm-login-modal"
        aria-describedby="confirm-login"
        open={isModalOpen}
        onClose={() => setModalOpen(!isModalOpen)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={isModalOpen}>
          <S.Modal>
            <h2 id="confirm-login-modal">Confirm Login</h2>
            <p id="confirm-login">Your session is about to end.</p>
            <Button color="primary">Stay logged in</Button>
          </S.Modal>
        </Fade>
      </Modal>
    </div>
  );
};

export default SimpleModal;
