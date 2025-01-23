import { GROUP_OPTIONS } from "./constants";

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string;
  films: string;
  created: string;
  edited: string;
  url: string;
};

export type Planets = Array<Planet>;

export type GroupOptions = (typeof GROUP_OPTIONS)[number];
