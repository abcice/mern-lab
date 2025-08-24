import { useState, useEffect } from "react";
import * as hootsAPI from "../../utilities/hoots-api";
import NewHootForm from "../../components/NewHootForm/NewHootForm";
import HootList from "../../components/HootList/HootList";

export default function HootFeedPage({ user }) {
  const [hoots, setHoots] = useState([]);

  useEffect(() => {
    async function fetchHoots() {
      const data = await hootsAPI.getAll();
      setHoots(data);
    }
    fetchHoots();
  }, []);

  async function handleAddHoot(hootText) {
    const newHoot = await hootsAPI.createHoot({ text: hootText });
    setHoots([...hoots, newHoot]);
  }

  return (
    <main>
      <NewHootForm handleHoot={handleAddHoot} />
      <HootList hoots={hoots} />
    </main>
  );
}
