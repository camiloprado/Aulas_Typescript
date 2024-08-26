import './App.css'
// import Timer from './components/Timer'
// import Message from './components/Message'
// import Message2 from './components/Message2'
import UserList from './components/Userlist'
import ToggleMessage from './components/ToggleMessage'

function App() {

  return (
    <div className='App'>
      <h1>Exemplo de React com TypeScript</h1>
      <UserList/>
      <ToggleMessage/>
    </div>
  )
}

export default App
