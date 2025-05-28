import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions';

// interface LoginLocationState {
//   from?: {
//     // 'from' pode não existir se o usuário navegar diretamente para /login
//     pathname?: string;
//     // Você pode adicionar outras propriedades do objeto Location se precisar delas
//   };
// }

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const prevPath = get(location, 'state.from.pathname', '/');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
