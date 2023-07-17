import logo from "./logo.svg";
import "./App.css";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import Slider from "./Slider";


function App() {ddd
  return (
    <>
      <section className="theme-banner">
        <div className="container text-center">
          <div className="theme_color_picker_container">
            <h2>Themes</h2>
            <form className="color-picker" action="">
              <fieldset>
                <legend className="visually-hidden">Pick a color scheme</legend>
                <label htmlFor="light" className="visually-hidden">
                  Light
                </label>
                <input type="radio" name="theme" id="light" defaultChecked="" />
                <label htmlFor="pink" className="visually-hidden">
                  Pink theme
                </label>
                <input type="radio" id="pink" name="theme" />
                <label htmlFor="blue" className="visually-hidden">
                  Blue theme
                </label>
                <input type="radio" id="blue" name="theme" />
                <label htmlFor="green" className="visually-hidden">
                  Green theme
                </label>
                <input type="radio" id="green" name="theme" />
                <label htmlFor="dark" className="visually-hidden">
                  Dark theme
                </label>
                <input type="radio" id="dark" name="theme" />
              </fieldset>
            </form>
          </div>
          <div className="spinner">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
}

export default App;
