import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture } from './styled';
import axios from '../../services/axios';

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

export default function Alunos() {
  const [alunos, setAlunos] = useState<AlunoType[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      setAlunos(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
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
              <FaWindowClose size={16} />{' '}
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
