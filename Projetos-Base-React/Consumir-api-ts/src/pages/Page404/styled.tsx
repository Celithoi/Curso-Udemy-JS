import styled from 'styled-components';

export const Page404Container = styled.div`
  text-align: center;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Paragrafo = styled.p`
  font-size: 1rem;
`;

export const BtnBackHome = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  background-color: #008cba; /* Cor do botão */
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #005f6b;
  }
`;

export const Icon = styled.div`
  font-size: 3rem;
  margin-top: 20px;
`;

export const DarkModeContainer = styled.div`
  background-color: #333;
  color: white;
`;

export const DarkModeBtn = styled(BtnBackHome)`
  background-color: #444;
  color: white;
`;

export const DarkModeIcon = styled(Icon)`
  font-size: 3rem;
`;
