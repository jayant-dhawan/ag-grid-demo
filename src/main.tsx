import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import {
  ClientSideRowModelModule,
  ModuleRegistry,
  RowStyleModule,
  TextFilterModule,
} from "ag-grid-community";
import { RowGroupingModule, RowGroupingPanelModule } from "ag-grid-enterprise";
import App from "./App.tsx";
import "@radix-ui/themes/tokens/base.css";
import "@radix-ui/themes/components.css";
import "@radix-ui/themes/utilities.css";
import "./index.css";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  RowGroupingModule,
  RowGroupingPanelModule,
  RowStyleModule,
  TextFilterModule,
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme appearance="dark" radius="large">
      <App />
    </Theme>
  </StrictMode>
);
