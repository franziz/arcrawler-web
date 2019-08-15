import React from "react";
import storyDecorator from "utils/storyDecorator";
import { storiesOf } from "@storybook/react"

import Content from "components/Content";

storiesOf("Content", module)
  .addDecorator(storyDecorator)
  .add("default", () => <Content>this is test content</Content>)