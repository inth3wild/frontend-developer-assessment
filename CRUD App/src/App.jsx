import { Provider } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/task-form';
import TaskList from './components/task-list';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
