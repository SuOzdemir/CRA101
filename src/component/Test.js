export default function Test({ baslik, children }) {

    function handleButtonClick() {
        //baslik = 'a';
        return () => {
            console.log('tıklandı.');
        }
    }

    return (
      <div>
          <button onClick={handleButtonClick()}>Tıkla</button>
          <h5>{baslik}</h5>
          {children}
      </div>
    );
}
