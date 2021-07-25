let sayac = 1;

export default function Test({ baslik, children }) {

    function handleButtonClick() {
        sayac++;
    }

    return (
      <div>
          <button onClick={() => handleButtonClick()}>Tıkla {sayac}</button>
          <h5>{baslik}</h5>
          {children}
      </div>
    );
}
