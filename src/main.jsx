import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
/* import "./index.css"; */
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <App />
    </MuiPickersUtilsProvider>
  
);
