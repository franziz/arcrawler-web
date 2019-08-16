import React from "react";
import storyDecorator from "utils/storyDecorator";
import { storiesOf } from "@storybook/react";

import ChangePasswordForm from "components/ChangePasswordForm"

storiesOf("ChangePasswordForm", module)
  .addDecorator(storyDecorator)
  .add("default", () => <ChangePasswordForm/>)