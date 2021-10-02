import './App.css';
import {NotificationContainer} from 'react-notifications';
import Routes from './componets/Routes';
import 'react-notifications/lib/notifications.css';

function App() {

  return (
    <div>
      <Routes/>
      <NotificationContainer/>
    </div>
    
  );
}

export default App;


