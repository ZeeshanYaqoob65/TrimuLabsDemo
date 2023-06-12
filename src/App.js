
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { DataProvider } from './context/DataContext';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { StrictMode } from "react";


function App() {
  return (
  
  <RouterProvider router={Routes} />

  )
}

export default App;
