import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="text-blue-700">
      App
    </div>
    </Provider>
  );
}

export default App;
