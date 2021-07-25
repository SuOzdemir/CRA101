import {useState} from "react";

export default function Test({ baslik, children }) {
    const [sayac, setSayac] = useState(1);

    function handleButtonClick() {
        setSayac(sayac + 1);
    }

    return (
      <div>
          <button onClick={() => handleButtonClick()}>Tıkla {sayac}</button>
          <h5>{baslik}</h5>
          {children}
      </div>
    );
}
