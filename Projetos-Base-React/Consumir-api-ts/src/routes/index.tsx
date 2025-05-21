import { Routes, Route } from 'react-router-dom';

// importando as paginas

import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function RoutesApp() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MyRoute component={Alunos} isClosed={false} />}
      />
      <Route
        path="/aluno/:id/edit"
        element={<MyRoute component={Aluno} isClosed />}
      />
      <Route path="/aluno/" element={<MyRoute component={Aluno} isClosed />} />
      <Route
        path="fotos/:id"
        element={<MyRoute component={Fotos} isClosed />}
      />
      <Route
        path="login/"
        element={<MyRoute component={Login} isClosed={false} />}
      />
      <Route
        path="register/"
        element={<MyRoute component={Register} isClosed={false} />}
      />
      <Route path="*" element={<MyRoute component={Page404} />} />
    </Routes>
  );
}
