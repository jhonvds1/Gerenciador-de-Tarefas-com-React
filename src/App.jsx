import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";

function App(){
return(
  <div>
    <h1 className="text-red-500">Gerenciador de Tarefas</h1>
    <Tasks></Tasks>
    <AddTask></AddTask>
  </div>
);


}


export default App