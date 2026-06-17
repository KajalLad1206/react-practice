
import { Header } from "./components/Header";
import { Counter } from "./components/Counter";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";

import './App.css'; 

export const App = () => {
  const username ="Kajal"
  return (
    <> 
      <Header />      
        <center><h1>Hello , { username }</h1></center>
        <p>Lets create projects with react</p>
        <Counter />
        <TaskList title="myTasks" />
      <Footer />
    </>
  )
}
