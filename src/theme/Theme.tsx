import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css";
import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  palette: {
    text: {
      mainColor: "black",
      semiColor: "rgba(28, 28, 28, 0.6)",
      smallColor: "",
    },
    input: {
      borderColor: "",
    },
    button: {
      PrimaryBackgroundColor: "",
    },
  },
});

export { theme };
