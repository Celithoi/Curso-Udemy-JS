import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
//import { get } from 'lodash'; // lodash é ótimo para acessar propriedades com segurança
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions'; // Importa as ações do Redux

// Interfaces e Componentes

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import { Title, Form } from './styled';
import axios from '../../services/axios';
import { appHistory } from '../../services/history';
import { isAxiosError } from 'axios'; // Importa a função para verificar erros do Axios

export default function Fotos() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);

        // Pega o caminho da imagem, ex: "/images/foto.png"
        const caminhoDaFoto = data.foto?.[0]?.url;

        // Se o caminho existir...
        if (caminhoDaFoto) {
          // Monta a URL completa: "http://192.168.3.50" + "/images/foto.png"
          const urlFinal = `${axios.defaults.baseURL}${caminhoDaFoto}`;

          // Define a foto com a URL que funciona!
          setFoto(urlFinal);
        }

        setIsLoading(false);
      } catch {
        setIsLoading(false);
        toast.error('Erro ao carregar a foto do aluno.');
        appHistory.push('/');
      }
    };

    getData();
  }, [id]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fotoUrl = URL.createObjectURL(file);
      setFoto(fotoUrl);
    }
    const formData = new FormData();
    formData.append('aluno_id', id || '');
    formData.append('foto', e.target.files?.[0] || '');

    try {
      setIsLoading(true);
      await axios.post('/fotos', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Foto enviada com sucesso!');
    } catch (error) {
      if (isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 401) {
          toast.error('Sua sessão expirou. Faça login novamente.');
          dispatch(actions.loginFailure());
          appHistory.push('/');
        } else {
          const errorMessage =
            error.response?.data?.error || 'Ocorreu um erro ao enviar a foto.';
          toast.error(errorMessage);
        }
      } else {
        console.error('Erro inesperado:', error);
        toast.error('Ocorreu um erro inesperado. Tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>Fotos</Title>
      <Form>
        <label htmlFor="foto">
          {foto ? <img src={foto} alt="Foto" /> : 'Selecionar'}
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
