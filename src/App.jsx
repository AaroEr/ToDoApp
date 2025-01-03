import { BrowserRouter } from 'react-router-dom'

import ToDoList from './components/ToDoList'
import Header from './components/Header'

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <ToDoList />
      </div>    
    </BrowserRouter>
  )
}

export default App