// Components
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
// Service 
import { MangasService } from "../Service/MangasService";

function Home() {
  const [mangas, setMangas] = useState({})

  useEffect(() => {
    MangasService.getMangas()
      .then((response) => {
        setMangas(response.data)
      })
  }, [])
  
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default Home;
