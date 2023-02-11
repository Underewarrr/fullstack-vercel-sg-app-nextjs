import Link from "next/link";
import { Card } from "react-bootstrap";
import Header from "./components/Header";
import homeIMG from '../utils/img/home.svg'

export default function Index() {
  return (
    <>
      <Header />
      <Card>
        <Card.Header>Home</Card.Header>
        <Card.Body>
      <div 
      style={{ marginTop: '5rem', marginLeft: '1rem' }}
      
      className="d-flex justify-content-between">
      <p>
        <div
        style={{ fontSize: '3rem', fontFamily: 'ui-sans-serif' }}
        >
      Ganhar Dinheiro<br/>
      Online Usando Suas<br/> Redes Sociais!
      </div>
      <p>Tenha uma renda extra utilizando suas redes sociais para<br/> seguir, curtir e comentar. <br/>Ganhe dinheiro online agora mesmo!</p>
      </p>
      <img 
      style={{ width: '30rem', marginRight: '3rem' }}
      src="https://svgshare.com/i/qB_.svg" alt="" />
      </div>
      </Card.Body>
      </Card>

    </>
  );
}
