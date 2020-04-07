import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";

export const Card = styled(Paper)`
  opacity: 0;
  padding: 10px 14px 8px 14px;
  position: relative;
`;

export const CardHeader = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.87);
`;

export const CountText = styled.span`
  font-size: 11px;
`;

export const CardBody = styled.div`
  display: flex;
  margin: 20px 0 5px 0;
  justify-content: space-between;
`;

export const MacroList = styled(CardContent)`
  width: 90%;
  font-size: 12px;
`;

export const Span = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 2px;
`;

export const Image = styled.div`
  height: 100px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    height: 100%;
    width: auto;
  }
  & svg {
    font-size: 100px;
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
