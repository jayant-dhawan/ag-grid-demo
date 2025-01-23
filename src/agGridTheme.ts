import { themeQuartz } from "ag-grid-community";

const agGridTheme = themeQuartz.withParams({
  backgroundColor: "var(--gray-2)",
  browserColorScheme: "dark",
  chromeBackgroundColor: {
    ref: "foregroundColor",
    mix: 0.07,
    onto: "backgroundColor",
  },
  foregroundColor: "#FFF",
  headerFontSize: 14,
});

export default agGridTheme;
