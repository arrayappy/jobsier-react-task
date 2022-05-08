import { ChakraProvider } from "@chakra-ui/react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Blog } from "./Blog";
export function App() {
  return (

  <Provider store={store}>
  <ChakraProvider>
    <Blog />
  </ChakraProvider>
  </Provider>
  )
}
