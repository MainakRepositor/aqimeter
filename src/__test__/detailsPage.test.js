import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/store';
import DetailsPage from '../pages/DetailsPage';

afterEach(cleanup);
test('Check if Details page is rendering correctly', () => {
  const detailsPage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="search/details" element={<DetailsPage />} />
          </Routes>
          ,
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(detailsPage).toMatchSnapshot();
});
