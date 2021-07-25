import {useEffect, useState} from "react";

export default function Test({ baslik, children }) {
    const [sayac, setSayac] = useState(1);
    const [sayacKare, setSayacKare] = useState(1);
    const [text, setText] = useState('');

    const [liste, setListe] = useState(['a', 'b']);

    useEffect(() => {
        console.log('useEffect Sayaç = ', sayac);
        setSayacKare(sayac * sayac);
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
          <br />
          <input value={text} onChange={e => setText(e.target.value)} />
          <button onClick={() => {
              const newListe = [...liste];
              // const newListe = liste.filter(val => true);
              newListe.unshift(text);
              setListe(newListe);
              setText('');
          }}>Tıkla {sayac}</button>
          <h5>{baslik} {sayacKare}</h5>
          {children}
          <br />
          <ul>
              {liste.map(val => (
                  <li>{val}</li>
              ))}
          </ul>
      </div>
    );
}
