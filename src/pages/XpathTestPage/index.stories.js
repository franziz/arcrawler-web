import React from "react";
import storyDecorator from "utils/storyDecorator";
import { storiesOf } from "@storybook/react";

import XpathTestPage from "pages/XpathTestPage";

storiesOf("Pages/XpathTestPage", module)
  .addDecorator(storyDecorator)
  .add("default", () => <XpathTestPage/>)