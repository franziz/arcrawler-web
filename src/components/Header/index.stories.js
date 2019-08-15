import React from "react";
import storyDecorator from "utils/storyDecorator";
import { storiesOf } from "@storybook/react";

import Header from "components/Header";

storiesOf("Header", module)
  .addDecorator(storyDecorator)
  .add("default", () => <Header/>)