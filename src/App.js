import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const apiKey = REACT_APP_API_KEY;
  const baseUrl = "https://rebrickable.com/api/v3/lego/";

  const getAllSets = async () => {
    try {
      const response = await axios.get(`${baseUrl}sets/?key=${apiKey}`);
      console.log(response.data.results);
    } catch (error) {
      console.log("Error fetching sets ", error);
    }
  };

  useEffect(() => {
    getAllSets();
  }, []);

  return (
    <div>
      <h1>hi</h1>
      <Button>Button</Button>
    </div>
  );
}

export default App;
