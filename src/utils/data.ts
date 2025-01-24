import { COLUMNS_CONFIG } from "../constants";
import { GroupOptions, Planets } from "../types";

export function processPlanetsData(data: Planets) {
  const processedData: Planets = [];

  data.forEach((item) => {
    const climates = item.climate.split(",").map((climate) => climate.trim());
    const terrains = item.terrain.split(",").map((terrain) => terrain.trim());

    climates.forEach((climate) => {
      terrains.forEach((terrain) => {
        processedData.push({
          ...item,
          climate,
          terrain,
        });
      });
    });
  });

  return processedData;
}

export function generateColumnGroupConfig(order: GroupOptions | "") {
  if (!order) return COLUMNS_CONFIG;

  const orderValues: Record<string, number> = order
    .split("/")
    .map((val) => val.trim())
    .reduce((acc, val, index) => ({ ...acc, [val]: index }), {});

  return COLUMNS_CONFIG.map((col) => ({
    ...col,
    ...(orderValues[col.field] >= 0 && {
      enableRowGroup: true,
      hide: true,
      rowGroupIndex: orderValues[col.field],
    }),
  }));
}
