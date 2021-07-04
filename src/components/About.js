import React from "react";
import Example from "./Example";
import MainText from "./MainText";
import Slideshow2 from "./Slideshow2";
import Achievements from "./Achievements";
import "./About.css";

function About() {
  return (
    <div>
      <section id="o-mnie">
        <MainText />
      </section>
      <section id="treningi">
        <h2 className="about-header">Treningi</h2>
        <div className="treningi">
          <div>
            <img
              className="treningi-icon"
              src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618312499/tennis-racket_ztb9x3.png"
            />
            <h4 className="treningi-header">Trening indywidualny</h4>
            <ul>
              <li>Program dobierany do indywidualnych potrzeb zawodnika</li>
              <li>Zajęcia 1h/1,5h</li>
            </ul>
            <div className="moreinfo">
              <Example description={<>
              Program treningowy ustalany jest indywidualnie dla każdego. Na pierwszych zajęciach ustalamy cele i intensywność treningów. Każdorazowo zależy mi na jak najszybszym wprowadzeniu osoby uczonej w „grę”, to znaczy wypracowaniu podstawowych umiejętności do utrzymania piłki w korcie i cieszenia się pięknem tenisa już od pierwszych zajęć. Najważniejsza jest dobra zabawa!
              <br/>
              <br/>
              <b>Cena zajęć:</b>
              <br/>
              <br/>
              - 100 zł/h - do negocjacji przy większej ilości zajęć
              </>} />
            </div>
          </div>
          <div>
            <img
              className="treningi-icon"
              src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618314386/tennis_eozkp9.png"
            />
            <h4 className="treningi-header">Treningi grupowe</h4>
            <ul>
              <li>
                Treningi w grupach 4-osobowych na każdym poziomie zaawansowania
              </li>
              <li>Zajęcia 1h/1,5h</li>
            </ul>
            <div className="moreinfo">
              <Example description={<>Zajęcia grupowe dla dzieci/młodzieży/dorosłych odbywają się w grupach od 2 do 6 osób (w przypadku grup dzieci limit uczestników wynosi 8 osób).
 <br/>
 <br/>            
<b>Ceny zajęć:</b>
<br/>
<br/>
- 2 osoby - 70zł/h - 280zł za 4 zajęcia w miesiącu lub 100/1,5h - 400zł za 4 zajęcia w miesiącu
<br/>
- 3-4 osoby - 60zł/1h - 240 za 4 zajęcia w miesiącu lub 80/1,5h - 320zł za 4 spotkania w miesiącu
<br/>
- 5-6 osób (5-8 w przypadku dzieci) - 40zł/1h - 160zł za 4 zajęcia w miesiącu lub 60zł/1,5h - 240zł za 4 zajęcia w miesiącu
<br/>
<br/>
Zajęcia dla dorosłych prowadzone są wg opracowanego przez Międzynarodową Federacje Tenisową (ITF) programu Tennis Xpress, którego idea pozwala początkującym graczom po ok 6 tygodniach (w cyklu półtoragodzinnym) przyswoić podstawy takich umiejętności jak:
<br/>
<br/>
- podstawowe umiejętności techniczne w zakresie gry z głębi kortu, serwisu i woleja
<br/>
- czucie się pewnie grając piłką zieloną na punkty na pełnym korcie
<br/>
- znajomość podstawowych elementów taktyki
<br/>
- zapoznanie z przepisami gry
<br/>
<br/>
Zajęcia dla dzieci odbywają się w oparciu o program Międzynarodowej Federacji Tenisowej (ITF) Tenis 10.
Więcej informacji o programie <a href="https://tenis10.pl/1_328/o-programie-.aspx">TUTAJ</a></>} />
            </div>
          </div>
        </div>
      </section>
      <Slideshow2 />
      <section id="osiagniecia">
        <h3 className="about-header">Osiągnięcia</h3>
        <img
          className="trophy"
          src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1620664520/trophy_1_lj3zkc.png"
        />
        <br />
        <p className="achievements">
          Od kilku lat lwią część mojej pracy zajmuje szkolenie młodych
          zawodników będących ścisłą czołówką w Polsce a niekiedy na świecie.
          <br />
          <br />
          <Achievements />
        </p>
      </section>
      <section id="kontakt">
        <h2 className="about-header">Kontakt</h2>
        <div className="contact-info">
          <div className="contact-details">
            <p>
              <img
                className="icon"
                src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618402208/placeholder_h0fr83.png"
              />{" "}
              Ogrodowa 18, Chodów, Siedlce
            </p>
            <p>
              <img
                className="icon"
                src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618401933/phone-call_ggshnt.png"
              />{" "}
              +48 728484794
            </p>
            <p>
              <img
                className="icon"
                src="https://res.cloudinary.com/dnk61xxgl/image/upload/v1618401969/envelope_zqaoz7.png"
              />{" "}
              wojciech.jobczyk@gmail.com
            </p>
          </div>
          <div className="mapa">
            <h3>Jak dojechać?</h3>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.74974257583!2d22.24034095093602!3d52.21159516669255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f5b4fc01aa429%3A0x9e3518bbb124e563!2sOgrodowa%2018%2C%2008-119%20Chod%C3%B3w!5e0!3m2!1spl!2spl!4v1618405588097!5m2!1spl!2spl"
              width="350"
              height="200"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <div className="footer">
        <p>
          Zaprojektowała{" "}
          <a href="https://www.linkedin.com/in/anna-maria-mazurek">Anna</a>
        </p>
      </div>
    </div>
  );
}

export default About;
