import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import ErrorPage from './pages/ErrorPage';
import SearchPage from './pages/SearchPage';
import DetailsPage from './pages/DetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
  {
    path: 'search/details',
    element: <DetailsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
