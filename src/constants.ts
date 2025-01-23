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
  {
    field: "population",
    filter: "agTextColumnFilter",
    cellStyle: (params) => {
      if (params.value <= 200000 && params.value > 0) {
        return { fontWeight: "800", backgroundColor: "gray" };
      }
      return null;
    },
  },
  { field: "diameter" },
  { field: "orbital_period", headerName: "Orbital Period" },
  { field: "terrain", enableRowGroup: true, hide: true },
  { field: "climate", enableRowGroup: true, hide: true },
  { field: "rotation_period", enableRowGroup: true, hide: true },
];
