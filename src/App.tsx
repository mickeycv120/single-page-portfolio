import "./App.css";
import { Contact } from "./sections/Contact";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="max-w-277.5 mx-auto">
        <Projects />
        <div className="hidden">
          adamkeyes Nice to meet you! I'm Adam Keyes. Based in the UK, I'm a
          front-end developer passionate about building accessible web apps that
          users love. Contact me HTML 4 Years Experience CSS 4 Years Experience
          JavaScript 4 Years Experience Accessibility 4 Years Experience React 3
          Years Experience Sass 3 Years Experience
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
