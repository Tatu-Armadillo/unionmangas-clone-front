import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
// Components
import Navbar from "../Components/Navbar/Navbar";
// Service 
import { MangasService } from "../Service";
// Interface
import { IManga } from "../Interfaces"

function Home() {
  const [mangas, setMangas] = useState<IManga[]>([]);

  useEffect(() => {
    MangasService.getMangas()
      .then((response) => {
        setMangas(response.data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container">
        {mangas.map((manga, key) => {
          return (
            <Card key={key} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={manga.linkImage} />
              <Card.Body>
                <Card.Title>{manga.mainTitle}</Card.Title>
                <Card.Text>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </div>
    </div>
  );
}

export default Home;
