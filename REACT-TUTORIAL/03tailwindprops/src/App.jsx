import './App.css'
import Card from './components/Card'

function App() {

  let myObj ={
    name:'John',
    age: 25,
    role: 'SDE'
  }

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>VITE WITH TAILWIND</h1>
      <Card  username="EVAC" myArr={myObj}/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
