import { Provider } from 'react-redux';
import { store } from './data/store';
import AddLesson from './lessons/addLesson';
import Lessons from './lessons/Lessons';
import AddTeacher from './teachers/AddTeacher';
import TeacherList from './teachers/TeacherList';
import UpdatePanel from './updatePanel/UpdatePanel';

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex' }}>
        <div>
          <AddTeacher />
          <TeacherList />
        </div>
        <div>
          <AddLesson />
          <Lessons />
        </div>
      </div>
      <div>
        <UpdatePanel />
      </div>
    </Provider>
  );
}

export default App;
