
import React from "react";
import Homepage from "../pages/Homepage";
import Galleria from "../pages/Galleria";
import Servizi from "../pages/Serizi";
import Formazione from "../pages/Formazione";
import Contatti from "../pages/Contatti";
import Errore from "../pages/Errore";

type Route = {
  // id: number;
  path: string;
  element: React.ReactElement;
  label?: string;
};

export const routes: Route[] = [
  {
    // id: 1,
    path: "/",
    element: <Homepage />,
    label: "homepage",
  },
  {
    // id: 2,
    path: "/Galleria",
    element: <Galleria />,
    label: "galleria",
  },
  {
    // id: 3,
    path: "/Servizi",
    element: <Servizi />,
    label: "servizi",
  },
  {
    // id: 4,
    path: "/Formazione",
    element: <Formazione />,
    label: "formazione",
  },
  {
    // id: 5,
    path: "/contatti",
    element: <Contatti />,
    label: "contatti",
  },
  {
    // id: 99,
    path: "*",
    element: <Errore />,
  }
];