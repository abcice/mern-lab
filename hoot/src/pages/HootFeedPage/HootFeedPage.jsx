import { useState, useEffect } from "react";
import * as hootsAPI from "../../utilities/hoots-api";
import styles from "./HootFeedPage.module.scss";

import NavBar from "../../components/NavBar";
import HootList from "../../components/HootList/HootList";
import NewHootForm from "../../components/NewHootForm/NewHootForm";

export default function HootFeedPage({ user, setUser }) {
  const [hoots, setHoots] = useState([]);

  useEffect(() => {
    async function fetchHoots() {
      const hoots = await hootsAPI.getAll();
      setHoots(hoots);
    }
    fetchHoots();
  }, []);

  async function handleAddHoot(hootText) {
    const newHoot = await hootsAPI.create({ text: hootText });
    setHoots([newHoot, ...hoots]); 
  }

  return (
    <main className={styles.HootFeedPage}>
      <NavBar user={user} setUser={setUser} />
      <NewHootForm handleAddHoot={handleAddHoot} />
      <HootList hoots={hoots} />
    </main>
  );
}
