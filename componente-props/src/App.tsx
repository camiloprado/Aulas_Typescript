import './App.css'
import { Eventos } from './assets/Eventos'
import { Lifecicly } from './assets/Lifecicly'
import { Props } from './assets/Props'
import { Renderizacao } from './assets/Rederizacao'

function App(){
  return (
    <>
      <Props/>
      <Renderizacao/>
      <Eventos/>
      <Lifecicly/>
    </>
  )
}

export default App