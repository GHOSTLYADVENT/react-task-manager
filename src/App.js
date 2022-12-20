import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 0,
        text: 'Doctor Appointment',
        day: '22 November 2022 at 9:00am',
        isComplete: true
      }, 
      {
        id: 1,
        text: 'Coding on Djanjo Rest Framework',
        day: '23 November 2022 at 10:00am',
        isComplete: false
      }, 
      {
        id: 2,
        text: 'Dentist Appointment',
        day: '24 November 2022 at 9:00am',
        isComplete: true
      },
      {
        id: 3,
        text: 'Delivery to Job',
        day: '24 November 2022 at 3:00pm',
        isComplete: false
      },
      {
        id: 4,
        text: 'Baseball Game',
        day: '23 November 2022 at 4:00pm',
        isComplete: false
      }
    ]
  )

  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => 
      task.id !== id
      )
    )
  }


  return (
    <div className="container">
      <Header className="App-header" />
      {tasks.length > 0 ? 
        (
          <Tasks tasks={tasks} onDelete={deleteTask} />
        ) :
        (
          'No Task Available'
        )
      }
    </div>
  );
}

export default App;
