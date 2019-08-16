import React from "react";
import customTheme from "utils/customTheme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { SnackbarProvider } from "notistack";

export default function decorator(storyFn){
  return (
    <ThemeProvider theme={customTheme}>
      <SnackbarProvider>
        <BrowserRouter>
          {storyFn()}
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  )
}