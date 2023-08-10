import { useEffect, useState, useRef } from "react";
import Layout from "../components/Layout";
import { useFetchSnippets } from "../hooks/useFetchSnippets";
import { Snippet } from "../global/types";

const code = `const App = props => {
    return (
      <div>
        <h1> React App </h1>
        <div>Awesome code</div>
      </div>
    );
  };`;

export default function TakeTest() {
  const [typedText, setTypedText] = useState("");
  const userInputRef = useRef<HTMLTextAreaElement>(null);
  const { data: snippets, isLoading, isError } = useFetchSnippets();

  function handleInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setTypedText(value);
  }

  useEffect(() => {
    userInputRef.current?.focus();
  });

  function renderCodeWithHighlights() {
    const codeChars = code.split("");
    const typedChars = typedText.split("");

    return (
      <pre className="w-[100%] min-h-full rounded-2xl whitespace-pre-wrap border p-4 mt-2">
        <code>
          {codeChars.map((char, index) => {
            let color = "white";

            if (typedChars[index]) {
              if (typedChars[index] === char) {
                color = "green-800";
              } else {
                color = "red-700";
              }
            }
            if (char === "\t" || char === "    ") {
              char = `${"\u0009"}↹`;
            }

            if (char === "\n") {
              char = ` ⏎${"\u000A"}`;
            }

            return (
              <span className={`text-${color}`} key={index}>
                {char}
              </span>
            );
          })}
        </code>
      </pre>
    );
  }

  function getUniqueLanguages(snippets: Snippet[]): string[] {
    const languages = new Set<string>();

    snippets.forEach((snippet) => {
      if (!languages.has(snippet.language)) {
        languages.add(snippet.language);
      }
    });

    return Array.from(languages);
  }
  return (
    <Layout>
      <div className="h-full w-full p-8">
        {isLoading ? (
          <h1>Fetching code snippets</h1>
        ) : isError ? (
          <h1>Error</h1>
        ) : (
          <select
            defaultValue="default"
            className="select w-full max-w-xs border-black dark:border-pink-700 dark:rounded-full"
          >
            <option value="default">Select language</option>
            {getUniqueLanguages(snippets).map((language) => (
              <option value={language} className="capitalize">
                {language}
              </option>
            ))}
          </select>
        )}

        <div className="w-full h-full flex flex-col space-y-4 ">
          {renderCodeWithHighlights()}

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
            onChange={handleInputChange}
            ref={userInputRef}
            rows={1}
            value={typedText}
            className="min-h-full w-full rounded-2xl resize-none p-4 text-center "
          ></textarea>
        </div>
      </div>
    </Layout>
  );
}
