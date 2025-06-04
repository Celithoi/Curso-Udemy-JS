import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/Loading';

type estado = {
  auth: AuthState;
};

type AuthState = {
  isLoading: boolean;
};

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const prevPath = get(location, 'state.from.pathname', '/');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const isLoading = useSelector((state: estado) => state.auth.isLoading);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    let formErros = false;

    if (!isEmail(email)) {
      formErros = true;
      toast.error('E-mail Inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error('Senha inválida');
    }

    if (formErros) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="Seu email"
        />

        <input
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          placeholder="Digite seu password"
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
