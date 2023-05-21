import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
