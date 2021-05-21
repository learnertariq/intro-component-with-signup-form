import Form from "./components/Form";
import Plan from "./components/Plan";

import "./App.css";

function App() {
  return (
    <div className="hero container">
      <div className="hero-details">
        <h1 className="hero__title">Learn to code by watching others</h1>
        <p className="hero__tagline">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="hero-form">
        <Plan />
        <Form />
      </div>
    </div>
  );
}

export default App;
