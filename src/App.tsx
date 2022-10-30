import { RouterProvider } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import { router } from "./utils/router/router";


function App() {
  return <div className="App font-main">
		<Wrapper>
			<RouterProvider router={router}/>
		</Wrapper>
	</div>;
}

export default App;
