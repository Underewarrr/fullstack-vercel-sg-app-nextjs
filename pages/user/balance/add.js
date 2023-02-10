import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Button, Card, Form } from "react-bootstrap";
import Header from '../../components/Header'

const PUBLIC_KEY = "TEST-2724ac84-5ce2-45d6-8de4-df9d8378ac77";

export default function Index() {
  //const { id } = useParams(); // id de producto
  const id = 1122;
  const [preferenceId, setPreferenceId] = useState(null)
  const [price, setPrice] = useState('');

  const initialized = useRef(false)
  const { loaded } = useScript("https://sdk.mercadopago.com/js/v2")

  function useScript(url) {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      const existingScript = document.querySelector(`[src="${url}"]`)
  
      if (existingScript) {
        setLoaded(true)
      } else {
        const script = document.createElement("script")
        script.src = url
        script.async = true
        script.onload = () => {
          setLoaded(true)
        }
  
        document.body.appendChild(script)
      }
    }, [url])
  
    return {
      loaded
    }
  }
  
  useEffect(() => {
    if (initialized.current) {
      console.log('initialized.current')
      return
    }

    if (!loaded) {
      console.log('loaded')
      return
    }

    if (preferenceId === null) {
      console.log('preferenceId null')
      return
    }

    initialized.current = true

    const mp = new window.MercadoPago(PUBLIC_KEY, {
      locale: "pt-BR",
    });

    mp.checkout({
      preference: {
        id: preferenceId,
      },
      render: {
        container: '#button-checkout', // Indica el nombre de la clase donde se mostrará el botón de pago
        label: "Pagar", // Cambia el texto del botón de pago (opcional)
      },
    });

  }, [loaded, preferenceId])



  const fetchPayment = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/user/balance/add",
        { 
          productId: id, 
          description: "Adicionar saldo na carteira SG",
          price,
          quantity: 1, },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setPreferenceId(await data.id);
      console.log('data.id', data.id)
      console.log('try')
      return data;
    } catch (error) {
      console.log('catch', error)
    }
  };

/*     const fetchId = async () => {
      console.log('fetch')
      try {
        const post = await fetch("http://localhost:3000/api/user/balance/add", {
          method: "POST",
          made: "cors",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            productId: id,
            description: "Adicionar saldo na carteira SG",
            price,
            quantity: 1,
          }),
        });

        const data = await post.json();

        console.log('data id', data.id);
        setPreferenceId(await data.id);
      } catch (error) {
        console.log('error', error);
      }
    } */



 

  return (
    <div>
      <Header />
      <Card>
      <Form.Group>
          <Form.Label>Valor : </Form.Label>
          <Form.Control
            onChange={({ target: { value } }) => setPrice(value)}
            name="valor"
            type="number"
            placeholder="10,00"
          />
        </Form.Group>
      </Card>
      <div className='d-grid gap-2 mt-2'>
        <Button onClick={fetchPayment}>
           Gerar Botão de pagamento
        </Button>
        </div>
     <center><div className="button-checkout" id="button-checkout"></div></center>
    </div>
  )
  ;
}