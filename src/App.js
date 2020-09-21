import React, { useEffect } from "react";
import Editors from "./components/Editors";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [javascript, setJavascript] = useLocalStorage("javascript", "");
  const [srcDoc, setSrcDoc] = useLocalStorage("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`  <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${javascript}</script>`);
    }, 280);
    return () => clearTimeout(timeOut);
  }, [html, css, javascript]);

  return (
    <>
      <div className="pane top-pane">
        <Editors
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editors
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editors
          language="javascript"
          displayName="JS"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
