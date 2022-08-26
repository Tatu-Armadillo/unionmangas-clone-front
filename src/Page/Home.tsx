import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
// Components
import Navbar from "../Components/Navbar/Navbar";
import InputMangas from "../Components/InputsMangas/InputMangas";

function Home() {

  return (
    <div>
      <Navbar />
      <div className="container">
        <InputMangas />        
      </div>
    </div>
  );
}

export default Home;
