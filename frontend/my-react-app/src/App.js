import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/hello")
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Фронтенд работает 🎉</h1>
      <p>Ответ от бэка: {message}</p>
    </div>
  );
}

export default App;