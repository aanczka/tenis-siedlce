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
            <b>Wynajem kortu:</b>
            <br />
            <br />
            Poniedziałek - piątek
            <li>08:00 - 16:00 - 40 zł/h</li>
            <li>16:00 - 00:00 - 50 zł/h</li>
            <br />
            Sobota - niedziela
            <li>40 zł/h</li>
            <br />
            <br />
            <b>Treningi (1h):</b>
            <br />
            <br />
            <li>Trening indywidualny (1-2 os. na treningu): *140 zł/h - 180 zł/h</li>
            <br />
            *zależne od wyboru trenera
            <br />
            <br />
            Treningi grupowe:
            <li>60 zł/1h</li>
            <li>70 zł/1,5h</li>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default CennikLetni;
