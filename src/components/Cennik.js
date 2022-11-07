import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./Cennik.css";

function Cennik() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        style={{
          backgroundColor: "#cb9737",
          borderStyle: "none",
          width: "180px",
        }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Cennik zimowy
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="achievements-more">
            <li>Wynajem kortu krytego przed 15:00 - 80 zł</li>
            <li>Wynajem kortu krytego po 15:00 - 90 zł</li>
            <br />
            <b>Treningi (1h)*:</b>
            <br />
            <br />
            <li>Trening indywidualny - 180 zł</li>
            <li>Trening 2 osoby - 190 zł</li>
            <li>Trening 3-4 osoby - 70 zł/os.</li>
            <li>Trening grupowy dzieci 3-6 osób - 60 zł/os.</li>
            <br />
            Cena zawiera możliwość wypożyczenia rakiety.
            <br />
            <br />
            *Możliwość gry w formie treningów 1h, 1,5h, 2h. W przypadku większej
            liczby treningów cena podlega indywidualnej wycenie
            <br />
            <br />
            <b>Karnety:</b>
            <br />
            <br />
            <li>Karnet zimowy na korty w dowolnych godzinach (10h) - 850 zł</li>
            <li>Karnet zimowy na korty przed 15:00 (10h) - 700zł</li>
            <br />
            <br />
            Naciągnięcie rakiety - 30 zł + cena naciągu
          </div>
        </div>
      </Collapse>
      <br />
      <br />
    </>
  );
}

export default Cennik;
