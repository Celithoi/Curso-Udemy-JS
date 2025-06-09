import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled';
import axios from '../../services/axios';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';

interface FotoType {
  id?: number;
  originalname?: string;
  filename?: string;
  url?: string; // Exemplo, se você fosse exibir a URL da foto
}

interface AlunoType {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  idade: number;
  peso: number;
  altura: number;
  Fotos: FotoType[];
}

type LoadingType = boolean;

export default function Alunos() {
  const [alunos, setAlunos] = useState<AlunoType[]>([]);
  const [isLoading, setIsLoading] = useState<LoadingType>(false);

  const token = useSelector((state: RootState) => state.auth.token);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  const handleDeleteAsk = (e: React.MouseEvent) => {
    e.preventDefault();

    const linkPai = e.currentTarget.parentElement;
    if (linkPai) {
      const exclamation = linkPai.nextElementSibling as HTMLElement;

      if (exclamation) {
        exclamation.style.display = 'inline';
      }

      linkPai.remove();
    }
  };

  const handleDelete = async (
    e: React.MouseEvent,
    id: number,
    index: number
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (!isLoggedIn) {
        toast.error('Você precisa fazer login para deletar.');
        setIsLoading(false);
        return 1;
      }
      await axios.delete(`/alunos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
      setIsLoading(false);
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>
      <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>
      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={aluno.id}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img src={aluno.Fotos[0].url}></img>
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />{' '}
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} onClick={handleDeleteAsk} />{' '}
            </Link>
            <FaExclamation
              size={16}
              style={{ display: 'none', cursor: 'pointer' }}
              onClick={(e) => handleDelete(e, aluno.id, index)}
            />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
