import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "./Zapisy.css";



function Zapisy() {
  const [open, setOpen] = useState(false);

  return (
    <>
<div id="zapisy">
<div id="kluby_org_rozwiazanie_dedykowane">
        <p>
                <i style={{color: '#007663', fontStyle: 'normal', fontFamily: 'Roboto, sans-serif'}}>Masz problem z zalogowaniem? Otwórz stronę <a href="https://kluby.org/klub/siedlecka-edukacja-tenisowa/dedykowane" style={{color: '#007663', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif'}}>w nowym oknie</a>.</i>
        </p>                                           
        <iframe id="iframe_kluby_org_rozwiazanie_dedykowane" src="https://kluby.org/klub/siedlecka-edukacja-tenisowa/dedykowane" width="100%" height="1500" border="0"></iframe>
</div>
</div>
    </>
  );
}

export default Zapisy;

