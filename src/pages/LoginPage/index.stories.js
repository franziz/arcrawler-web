import React from "react";
import storyDecorator from "utils/storyDecorator";
import { storiesOf } from "@storybook/react";

import LoginPage from "pages/LoginPage";

storiesOf("Pages/LoginPage", module)
  .addDecorator(storyDecorator)
  .add("default", () => <LoginPage/>)