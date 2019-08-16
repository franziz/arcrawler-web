import React from "react";
import storyDecorator from "utils/storyDecorator";
import { storiesOf } from "@storybook/react";

import ChangePasswordPage from "pages/ChangePasswordPage";

storiesOf("Pages/ChangePasswordPage", module)
  .addDecorator(storyDecorator)
  .add("default", () => <ChangePasswordPage/>)