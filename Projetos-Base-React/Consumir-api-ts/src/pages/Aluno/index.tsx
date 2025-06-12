import { Container } from '../../styles/GlobalStyles';
import { useParams } from 'react-router-dom';
import { Form } from './styled';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import { appHistory } from '../../services/history';
import { isAxiosError } from 'axios';
import { get } from 'lodash';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { ProfilePicture, Title } from './styled';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Aluno() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id?: string }>();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [foto, setFoto] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');
        setFoto(Foto);
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
        setIsLoading(false);
      } catch (error) {
        if (isAxiosError(error)) {
          const status = error.response?.status ?? 0;
          //const status = get(error, 'response.status', 0);
          const errors = error.response?.data.error ?? [];
          //const errors = get(error, 'response.data.error', []);

          // if (status === 400) {
          //   errors.map((err: string) => toast.error(err));
          //   appHistory.push('/');
          // }
          if (status === 400) {
            const mensagem =
              status === 400 ? 'Aluno não encontrado.' : errors[0];

            toast.error(mensagem, {
              // Esta função será chamada quando o toast for fechado
              onClose: () => appHistory.push('/'),
              // Opcional: você pode diminuir o tempo de exibição se quiser
              // autoClose: 2000,
            });
          }
        }
      }
    }
    getData();
  }, [id]);

  return (
    <Container>
      <Loading isLoading={isLoading}></Loading>
      <Title>{id ? 'Editar Aluno' : 'Novo Aluno'}</Title>
      {id && (
        <ProfilePicture>
          {foto ? <img src={foto} alt={nome} /> : <FaUserCircle size={180} />}
          <Link to={`/fotos/${id}`}>
            <FaEdit size={24} />
          </Link>
        </ProfilePicture>
      )}
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          let formErros = false;

          if (nome.length < 3 || nome.length > 255) {
            toast.error('Nome precisa ter entre 3 e 255 caracteres');
            formErros = true;
            return;
          }

          if (sobrenome.length < 3 || sobrenome.length > 255) {
            toast.error('Nome precisa ter entre 3 e 255 caracteres');
            formErros = true;
            return;
          }

          if (!isEmail(email)) {
            toast.error('E-mail inválido');
            formErros = true;
            return;
          }
          if (!isInt(String(idade))) {
            toast.error('Idade inválida');
            formErros = true;
          }

          if (!isFloat(String(peso))) {
            toast.error('Peso inválido');
            formErros = true;
          }
          if (!isFloat(String(altura))) {
            toast.error('Altura inválida');
            formErros = true;
          }
          if (formErros) {
            return;
          }

          try {
            setIsLoading(true);
            if (id) {
              //editando
              await axios.put(`/alunos/${id}`, {
                nome,
                sobrenome,
                email,
                idade: Number(idade),
                peso: Number(peso),
                altura: Number(altura),
              });
              toast.success('Aluno editado com sucesso!');
            } else {
              //criando
              const { data } = await axios.post('/alunos/', {
                nome,
                sobrenome,
                email,
                idade: Number(idade),
                peso: Number(peso),
                altura: Number(altura),
              });
              toast.success('Aluno cadastrado com sucesso!');
              appHistory.push(`/aluno/${data.id}/edit`);
            }
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);

            if (isAxiosError(error)) {
              const status = error.response?.status ?? 0;

              const errors: string[] = error.response?.data?.errors ?? [];

              if (status === 401) {
                toast.info('Sessão expirada, faça o login novamente.');
                dispatch(actions.loginFailure());
              } else if (status === 400) {
                if (errors.length > 0) {
                  errors.map((err) => toast.error(err));
                } else {
                  toast.error(
                    'Erro de validação. Verifique os dados informados.'
                  );
                }
              } else {
                toast.error(
                  'Ocorreu um erro no servidor. Tente novamente mais tarde.'
                );
              }
            } else {
              // 4. Trate erros que não são de HTTP (ex: falha de rede).
              console.error('Erro não relacionado ao Axios:', error);
              toast.error(
                'Não foi possível conectar ao servidor. Verifique sua internet.'
              );
            }
          }
        }}
      >
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(String(e.target.value))}
          placeholder="Idade"
        />
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(String(e.target.value))}
          placeholder="Peso"
        />
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(String(e.target.value))}
          placeholder="Altura"
        />

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
