import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Greetingstyled from './components/pure/forms/greetingStyled';
import Loginformik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
    
        {/**COMPONENTE PROPIO GREETING.JSX */}
        {/* <Greeting name="Oscar"></Greeting> */}
        {/* <Greetingf name="Oscar"></Greetingf> */}
        {/* <TaskListComponent></TaskListComponent>  */}
        <Registerformik></Registerformik>
        {/* <Greetingstyled name='Óscar'></Greetingstyled> */}
   
    
    </div>
  );
}

export default App;
