import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
      {/* abaixo vamos fazer as rotas com um componente para validar se
      existe a necessidade do token e se o token esta disponivel*/}
      <Route
        path="1" //O caminho da rota
        element={
          // O que renderizar para este caminho
          <MyRoute component={Route} isClosed /> // A página a ser renderizada se autorizado
        }
      />{' '}
      {/*Indica que esta rota requer autorização*/}
    </Routes>
  );
}
