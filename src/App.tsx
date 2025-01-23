import { Flex, Container, Grid } from "@radix-ui/themes";
import { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import NavBar from "./components/NavBar";
import Select from "./components/Select";
import { GROUP_OPTIONS } from "./constants";
import useFetch from "./hooks/useFetch";
import { GroupOptions, Planets } from "./types";
import { generateColumnGroupConfig, processPlanetsData } from "./utils/data";
import agGridTheme from "./agGridTheme";
import Switch from "./components/Switch";

function App() {
  const [selectedSort, setSelectedSort] = useState<GroupOptions>(
    GROUP_OPTIONS[2]
  );
  const [expand, setExpand] = useState<boolean>(true);
  const { data } = useFetch<Planets>("https://swapi.info/api/planets");

  const processedData = useMemo(() => {
    if (!data) return null;
    return processPlanetsData(data);
  }, [data]);
  const columnDefs = useMemo(() => {
    return generateColumnGroupConfig(selectedSort);
  }, [selectedSort]);

  return (
    <>
      <NavBar />
      <Container>
        <Flex direction="column" gap="2">
          <Flex p="3" gap="4">
            <Select
              defaultValue={selectedSort}
              value={selectedSort}
              onValueChange={(val: GroupOptions) => setSelectedSort(val)}
              items={GROUP_OPTIONS.map((val) => ({ value: val, label: val }))}
            />
            <Switch
              label="Expand"
              onCheckedChange={setExpand}
              checked={expand}
            />
          </Flex>
          <Grid width="100%" height="80vh">
            <AgGridReact
              rowData={processedData}
              columnDefs={columnDefs}
              groupDefaultExpanded={expand ? -1 : 0}
              theme={agGridTheme}
              rowGroupPanelShow="always"
            />
          </Grid>
        </Flex>
      </Container>
    </>
  );
}

export default App;
