import { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import { appHistory as history } from '../../services/history';

export default function Register() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let formErros = false;

    if (nome.length < 3 || nome.length > 255) {
      formErros = true;
      toast.error('Nome deve ter entre 3 e 255 Caracteres');
    }

    if (!isEmail(email)) {
      formErros = true;
      toast.error('E-mail Inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error('Senha deve ter entre 6 e 50 Caracteres');
    }

    if (formErros) return;

    try {
      await axios.post('/users', { nome, password, email });
      toast.success('Usuário criado com sucesso!');
      history.push('/login');
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <h1>Crie sua Conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
            placeholder={'Seu Nome'}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
            placeholder={'Seu Email'}
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type={'password'}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
            placeholder={'Digite a senha'}
          />
        </label>

        <button type="submit">Criar minha Conta</button>
      </Form>
    </Container>
  );
}
