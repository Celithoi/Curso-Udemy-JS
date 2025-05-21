import styled from 'styled-components';

interface TitleProps {
  isRed?: boolean;
}

export const Title = styled.h1<TitleProps>`
  color: ${(props) => (props.isRed ? 'red' : 'blue')};
  background: green;
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  font-size: 1.4rem;
`;
