import { useEffect } from "react";
import Layout from "../components/Layout";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const code = `const App = props => {
    return (
      <div>
        <h1> React App </h1>
        <div>Awesome code</div>
      </div>
    );
  };
  `;

export default function TakeTest() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Layout>
      <div>
        <select className="select w-full max-w-xs">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <pre>
          <code className={`language-javascript`}>{code}</code>
        </pre>
      </div>
    </Layout>
  );
}
