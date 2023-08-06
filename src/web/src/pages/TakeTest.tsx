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
      <div className="h-full w-full p-8">
        <select className="select w-full max-w-xs border-black dark:border-pink-700 dark:rounded-full">
          <option disabled selected>
            Select your language
          </option>
          <option>JavaScript</option>
          <option>C#</option>
          <option>Go</option>
          <option>Java</option>
          <option>Python</option>
        </select>
        <div className="w-full h-full flex flex-row space-x-4 ">
          <pre className="w-[50%] min-h-full rounded-2xl" >
            <code className="language-javascript">{code}</code>
          </pre>
          <textarea className="min-h-full w-[50%] rounded-2xl resize-none"></textarea>
        </div>
      </div>
    </Layout>
  );
}
