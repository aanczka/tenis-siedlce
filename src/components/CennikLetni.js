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
            <li>Wynajem kortu:</li>
            <li>Poniedziałek - piątek</li>
            <li>08:00 - 16:00 - 40 zł/h</li>
            <li>16:00 - 00:00 - 50 zł/h</li>
            <br />
            <br />
            <li>Sobota - niedziela</li>
            <li>40 zł/h</li>
            <br />
            <br />
            <b>Treningi (1h):</b>
            <br />
            <br />
            <li>Trening indywidualny (1-2 os. na treningu):</li>
            <li>*140 zł/h - 180 zł/h</li>
            <br />
            <li>*zależne od wyboru trenera</li>
            <br />
            <br />
            <li>Treningi grupowe:</li>
            <li>60 zł/1h</li>
            <li>70 zł/1,5h</li>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default CennikLetni;
