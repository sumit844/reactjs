import styled from "styled-components";

export const MyButton = styled.button`
  width: 100px;

  color: black;
  background-color: red;
  padding: 20px;
  margin: 20px;
`;

export const H1 = styled.h1`
  color: ${(props) => {
    return props.color;
  }};
  font-size: 35px;
`;
