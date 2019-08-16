import React from "react";
import storyDecorator from "utils/storyDecorator";
import { storiesOf } from "@storybook/react";

import ProfileDrawer from "components/ProfileDrawer"

storiesOf("Drawer/Profile", module)
  .addDecorator(storyDecorator)
  .add("default", () => <ProfileDrawer/>)