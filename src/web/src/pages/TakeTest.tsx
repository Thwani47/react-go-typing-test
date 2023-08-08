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
        <select
          defaultValue="javascript"
          className="select w-full max-w-xs border-black dark:border-pink-700 dark:rounded-full"
        >
          <option disabled selected>
            Select your language
          </option>
          <option value="javascript">JavaScript</option>
          <option value="csharp">C#</option>
          <option value="go">Go</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
        <div className="w-full h-full flex flex-row space-x-4 ">
          <pre className="w-[50%] min-h-full rounded-2xl">
            <code className="language-javascript">{code}</code>
          </pre>
          <textarea
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                e.preventDefault();
                const start = e.currentTarget.selectionStart;
                const end = e.currentTarget.selectionEnd;
                const target = e.currentTarget;
                const value = target.value;
                target.value =
                  value.substring(0, start) + "\t" + value.substring(end);
                e.currentTarget.selectionStart = e.currentTarget.selectionEnd =
                  start + 1;
              }
            }}
            className="min-h-full w-[50%] rounded-2xl resize-none p-4"
          ></textarea>
        </div>
      </div>
    </Layout>
  );
}
