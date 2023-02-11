import React, { useState } from "react";

const useMPSDK = () => {

React.useEffect(() => {
      function verifyKeyOnLoad() { 
        window.Mercadopago.setPublishableKey('TEST-2724ac84-5ce2-45d6-8de4-df9d8378ac77')
        window.Mercadopago.getIdentificationTypes()
      }
      verifyKeyOnLoad();
      console.log('Key verified')
     // Reconectar
     /* setTimeout(() => {
      if (!window.Mercadopago.initialized) {
        verifyKeyOnLoad();
        console.log('Reconectando...')
      }
    }, 1000) */
  }, []);
}

export default useMPSDK