import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Public from './components/Public.jsx';
import Login from './features/auth/Login.jsx';
import DashLayout from './components/DashLayout.jsx';
import Welcome from './features/auth/welcome.jsx';
import NotesList from './features/notes/NotesList.jsx';
import UsersList from './features/users/UsersList.jsx';

import { store } from './app/store.jsx';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Public /> },
      { path: 'login', element: <Login /> },
    ],
  },
  {
    path: '/dash',
    element: <DashLayout />,
    children: [
      { path: '', element: <Welcome /> },
      { path: 'notes', element: <NotesList /> },
      { path: 'users', element: <UsersList /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
