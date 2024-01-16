import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div className='actions'>
        <Todo text='Learn' />
        <Todo text='Share' />
        <Todo text='Invite' />
      </div>
    </div>
  );
}

export default App;
