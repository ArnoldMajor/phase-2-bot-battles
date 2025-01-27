import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error("Error fetching bots:", error));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = async (botId) => {
    try {
      await axios.delete(`http://localhost:8000/bots/${botId}`);
      setBots(bots.filter(bot => bot.id !== botId));
      setArmy(army.filter(bot => bot.id !== botId));
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };

  return (
    <div className="App">
      <YourBotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onEnlist={enlistBot} onDischarge={dischargeBot} />
    </div>
  );
}

export default App;
