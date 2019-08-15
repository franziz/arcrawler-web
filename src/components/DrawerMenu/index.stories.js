import React from "react";
import storyDecorator from "utils/storyDecorator";
import { storiesOf } from "@storybook/react";

import DrawerMenu from "components/DrawerMenu"

storiesOf("Drawer", module)
  .addDecorator(storyDecorator)
  .add("default", () => <DrawerMenu/>)