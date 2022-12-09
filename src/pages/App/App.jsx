import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewContact from '../NewContacts/NewContact';
import ContactList from '../../components/ContactItem/ContactItem';
import DeleteContact from '../../components/ContactItem/DeleteItem';
import CurrentStrategy from '../CurrentStrategies/CurrentStrategies';
import NewStrategy from '../NewStrategy/NewStrategy'
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path='/contacts/new' element={<NewContact  user={user} setUser={setUser}/>} />            
            <Route path='/contacts/' element={<ContactList />} />
            <Route path='/contacts/:_id/delete' element={<DeleteContact />} />


            <Route path='/strategy/new' element={<NewStrategy />} />
            <Route path='/strategy' element={<CurrentStrategy/>} />
            
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
