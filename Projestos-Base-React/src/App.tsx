import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import type { History as RouterHistoryType } from '@remix-run/router';
import { appHistory } from './services/history';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import RoutesComponent from './routes';

function App() {
  return (
    <HistoryRouter history={appHistory as unknown as RouterHistoryType}>
      <Header />
      <RoutesComponent /> {/* Seu componente que usa <Routes> e <Route> */}
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </HistoryRouter>
  );
}

export default App;
