import React, { Suspense, useEffect } from "react";
import "./App.scss";
import { Grommet } from "grommet";
import { deepFreeze } from "grommet/utils";
import routes from "../../routes/root.route";
import { Router, View } from "react-navi";
import { akitaDevtools } from "@datorama/akita";



export interface GlobalProps {
    className?: string // so that className can be passed from all parent to child even if props is empty, not mandatory
}



export const customTheme = deepFreeze(
  {
      "global": {
          "colors": {
              "brand": "#e2336b",
              "focus": "none",
              "selected": "#e2336b",
              "accent-1": "#e2336b",
              "accent-2": "#fcac46"
          },
          font: {
              family: "Nunito",
              size: "12px",
              height: "20px",
          },
      },
      "formField": {
          "border": {
              "color": "none"
          }
      }
  }
);


function App() {
    useEffect(() => {
        akitaDevtools();
    }, []);
    return (
      <Grommet theme={customTheme}>
          <Router routes={routes}>
              <Suspense fallback={null}>
                  <View/>
              </Suspense>
          </Router>
      </Grommet>
    );
}


export default App;
