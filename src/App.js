import "./App.css";
import { privacyPolicy } from "./privacyPolicy";
import { termsOfUse } from "./terms";

function App() {
  const legalTerms = termsOfUse.split("\n").map((paragraphText, index) => (
    <p id={index + 10} style={{ fontSize: 16, margin: 20, textAlign: "left" }}>
      {paragraphText}
    </p>
  ));

  const policy = privacyPolicy.split("\n").map((paragraphText, index) => (
    <p id={index + 10} style={{ fontSize: 16, margin: 20, textAlign: "left" }}>
      {paragraphText}
    </p>
  ));

  return (
    <div className="App">
      {legalTerms}
      <div style={{ marginTop: 70 }}>{policy}</div>
    </div>
  );
}

export default App;
