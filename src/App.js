import { Provider } from 'react-redux';

import store from './store';
import { Home } from './pages/Home';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Home />
      </Provider>
      <GlobalStyle />
    </div>
  );
}

export default App;
