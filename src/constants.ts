import { ColDef } from "ag-grid-community";

export const GROUP_OPTIONS = [
  "rotation_period / climate / terrain",
  "terrain / rotation_period / climate",
  "climate / terrain / rotation_period",
] as const;

export const COLUMNS_CONFIG: Array<
  Required<Pick<ColDef, "field">> & Partial<ColDef>
> = [
    { field: "name", filter: "agTextColumnFilter" },
    { field: "gravity" },
    { field: "surface_water", headerName: "Surface Water" },
    { field: "population", filter: "agTextColumnFilter" },
    { field: "diameter" },
    { field: "orbital_period", headerName: "Orbital Period" },
    { field: "climate", enableRowGroup: true },
    { field: "terrain", enableRowGroup: true },
    {
      field: "rotation_period",
      headerName: "Rotation Period",
      enableRowGroup: true,
    },
  ];
