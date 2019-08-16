import React from "react";

import { Redirect } from "react-router-dom";

export default function DashboardPage(){
  return <Redirect to={{ pathname: "/xpathTest" }}/>
}