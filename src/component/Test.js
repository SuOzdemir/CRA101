import {useState} from "react";

export default function Test({ baslik, children }) {
    const [sayac, setSayac] = useState(1);

    function handleButtonClick() {
        console.log('setSayac öncesi', sayac);
        setSayac(sayac + 1);
        console.log('setSayac sonrası', sayac);
    }

    console.log('Test içi', sayac);

    return (
      <div>
          <button onClick={() => handleButtonClick()}>Tıkla {sayac}</button>
          <h5>{baslik}</h5>
          {children}
      </div>
    );
}
