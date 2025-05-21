import { useNavigate } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <h1>Oops! Página não encontrada.</h1>
        <br></br>
        <p>Desculpe, mas a página que você procurou não existe.</p>
        <br></br>
        <button onClick={() => navigate('/')} className="btn-back-home">
          Voltar para a Home
        </button>
      </Container>
    </>
  );
}
