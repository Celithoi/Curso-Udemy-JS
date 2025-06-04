import React, { useState, useEffect } from 'react'; // Adicionado useEffect
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';
import { AuthState } from '../../store/modules/auth/reducer'; // Seus tipos
// Supondo que você tem um tipo para o payload da action
// import { RegisterRequestPayload } from '../../store/modules/auth/reducer';

interface AppState {
  auth: AuthState;
}

export default function Register() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state: AppState) => state.auth.user);
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  // Acesso seguro às propriedades. Se currentUser for null (problema da store),
  // estas variáveis serão undefined, o que é melhor que um erro.
  const idStored = currentUser?.id;
  const nomeFromStore = currentUser?.nome; // Renomeado para clareza
  const emailFromStore = currentUser?.email; // Renomeado para clareza

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    // Se idStored existe E nome/email do store não são undefined
    if (
      idStored &&
      nomeFromStore !== undefined &&
      emailFromStore !== undefined
    ) {
      setNome(nomeFromStore);
      setEmail(emailFromStore);
      setPassword(''); // Limpa a senha ao preencher para edição
    } else if (!idStored) {
      // Se for novo registro, garante campos limpos
      setNome('');
      setEmail('');
      setPassword('');
    }
  }, [idStored, nomeFromStore, emailFromStore]); // Dependências corretas

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let formErrors = false; // Renomeado para clareza

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 Caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('E-mail Inválido');
    }

    if (!idStored && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 Caracteres');
    }

    if (formErrors) return; // Corrigido para formErrors

    // O tipo do payload aqui deve corresponder ao esperado pela sua action creator
    // e pelo seu reducer/saga. Ex: RegisterRequestPayload
    dispatch(actions.registerRequest({ nome, email, password, id: idStored }));

    // REMOVA O RETURN JSX DE DENTRO DO HANDLESUBMIT
  } // Fim do handleSubmit

  // O JSX DO COMPONENTE DEVE ESTAR AQUI, NO RETURN PRINCIPAL
  return (
    <Container>
      {isLoading && <Loading isLoading={isLoading} />}
      <h1>{idStored ? 'Edite seus Dados' : 'Crie sua Conta'}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder={'Seu Nome'}
            disabled={isLoading}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={'Seu Email'}
            disabled={isLoading}
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={
              idStored ? 'Deixe em branco para não alterar' : 'Sua Senha'
            }
            disabled={isLoading}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading
            ? 'Enviando...'
            : idStored
              ? 'Salvar Alterações'
              : 'Criar Conta'}
        </button>
      </Form>
    </Container>
  );
}
