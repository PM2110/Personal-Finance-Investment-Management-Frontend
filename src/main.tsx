import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Toaster } from 'react-hot-toast';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="top-center" reverseOrder={false} />
            <App />
        </PersistGate>
    </Provider>
)
