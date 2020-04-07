import styled from "styled-components";

export const Modal = styled.div`
  && {
    width: 90%;
    max-width: 400px;
    padding: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
    border: "2px solid #000";
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    transform: translate(-50%, -50%);
  }
`;
