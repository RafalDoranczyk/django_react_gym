import styled from "styled-components";
import { Button } from "@material-ui/core";

export const UploadButton = styled(Button)`
  && {
    width: 100%;
    display: inline-block;
    position: relative;
  }
`;

export const Label = styled.label`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;
