import React from "react";
import * as S from "./styles";
import { Input } from "@material-ui/core";
import { CloudUpload, CheckCircleOutline } from "@material-ui/icons/";

const UploadButton = ({ onChange, file, children }) => (
  <>
    <Input
      onChange={onChange}
      style={{ visibility: "hidden" }}
      id="file"
      type="file"
    />
    <S.UploadButton
      color="secondary"
      variant="contained"
      startIcon={file ? <CheckCircleOutline /> : <CloudUpload />}
    >
      {children}
      <S.Label htmlFor="file"></S.Label>
    </S.UploadButton>
  </>
);

export default UploadButton;
