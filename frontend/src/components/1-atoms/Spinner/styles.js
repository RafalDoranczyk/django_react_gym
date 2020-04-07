import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const Spinner = styled(CircularProgress)``;
