import { RouterProvider } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import { router } from "./utils/router/router";
import MetaTags from "react-meta-tags";

function App() {
  return (
    <div className="App ">
      <MetaTags>
        <link
          rel="preload"
          href="/Phanthom-Twilight.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Phanthom-Twilight.woff"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </MetaTags>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </div>
  );
}

export default App;
