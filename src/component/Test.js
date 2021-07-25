import {useEffect, useState} from "react";

export default function Test({ baslik, children }) {
    const [sayac, setSayac] = useState(1);
    const [sayacKare, setSayacKare] = useState(1);

    useEffect(() => {
        console.log('useEffect Sayaç = ', sayac);
    }, [sayac]);

    useEffect(() => {
        console.log('useEffect boş dependency Sayaç = ', sayac);
    }, []);

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
