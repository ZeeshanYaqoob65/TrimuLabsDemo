import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { DataProvider } from './context/DataContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache(),
});
function App() {
  return (
  
    <ApolloProvider client={client}>
    <DataProvider>
  <RouterProvider router={Routes} />
  </DataProvider>
  </ApolloProvider>
  )
}

export default App;
