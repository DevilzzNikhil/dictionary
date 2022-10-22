import { useContext } from "react";
import Box from "./components/Box";
import Header from "./components/Header";
import Loading from "./components/Loading";
import context from "./context/context" ;

function App() {

  const word = useContext(context)[0];
  const loading = useContext(context)[2];
  const submit = useContext(context)[4];

  return (
    <>

      <Header />

      <div className='bg-teal-900 my-0 min-h-[60vh] py-8'>

        {word && submit && !loading && (
          <Box word={word} />
        )}

        {loading && (
          <Loading />
        )}

      </div>

    </>
  );
}

export default App;
