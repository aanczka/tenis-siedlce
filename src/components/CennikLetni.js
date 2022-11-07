import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

function CennikLetni() {
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
        Cennik letni
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="achievements-more">
            <li>Wynajem kortu bez oświetlenia - 30 zł</li>
            <li>Wynajem kortu z oświetleniem - 50 zł</li>
            <br />
            <br />
            <b>Treningi (1h):</b>
            <br />
            <br />
            <li>Trening indywidualny 100 zł + kort</li>
            <li>Trening 2 os dorosłe - 120 zł + kort</li>
            <li>Trening 3 os dorosłe - 140 zł + kort</li>
            <li>Trening 4 os dorosłe - 160 zł + kort</li>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default CennikLetni;
