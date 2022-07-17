import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['feed the cats', 'cook', 'do the dishes', 'work out', 'study react', 'study english', 'play chess'];
  const createTasks = () => tasks.map((task) => Task(task));
  return (
   <ol>
    {createTasks()}
   </ol>
  );
}

export default App;
