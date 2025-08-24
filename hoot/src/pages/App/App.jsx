import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HootFeedPage from '../HootFeedPage/HootFeedPage'

export default function App() {
      const routes = [
    { key: "Feed", path: "/hoots" },
    { key: "Profile", path: "/profile" },
    { key: "New Hoot", path: "/new" },
  ];
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
        {user ?
        <>
              <NavBar routes={routes} user={user} setUser={setUser} />

        <Routes>
            <Route path="/hoot" element={<HootFeedPage user={user} setUser={setUser}/>}/>
        </Routes>
        </>
        :
                <AuthPage setUser={setUser} />

        }

    </main>
  )}