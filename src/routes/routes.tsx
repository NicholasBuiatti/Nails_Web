
import React from "react";
import Homepage from "../pages/Homepage";
import Galleria from "../pages/Galleria";
import ServiziPrezzi from "../pages/SeriziPrezzi";
import ChiSono from "../pages/ChiSono";
import Contatti from "../pages/Contatti";
import Errore from "../pages/Errore";

type Route = {
  id: number;
  path: string;
  element: React.ReactElement;
  label?: string;
};

export const routes: Route[] = [
  {
    id: 1,
    path: "/",
    element: <Homepage />,
    label: "homepage",
  },
  {
    id: 2,
    path: "/Galleria",
    element: <Galleria />,
    label: "galleria",
  },
  {
    id: 3,
    path: "/Servizi&Prezzi",
    element: <ServiziPrezzi />,
    label: "servizi e prezzi",
  },
  {
    id: 4,
    path: "/ChiSono",
    element: <ChiSono />,
    label: "chi sono",
  },
  {
    id: 5,
    path: "/contatti",
    element: <Contatti />,
    label: "contatti",
  },
  {
    id: 99,
    path: "*",
    element: <Errore />,
  }
];