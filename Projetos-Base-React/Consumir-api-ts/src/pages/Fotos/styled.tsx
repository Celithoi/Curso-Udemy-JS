import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: 5px dashed ${colors.primaryColor};
    margin: auto;
    margin-top: 20px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 180px;
    height: 180px;
  }

  input {
    display: none;
  }

  button {
    display: flex;
    border: 5px dashed ${colors.primaryColor};
    margin: auto;
    justify-content: center;
    margin-top: 20px;
  }
`;
