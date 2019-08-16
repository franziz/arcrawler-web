import React from "react";

import ProfileContainer from "components/ProfileContainer";
import ChangePasswordForm from "components/ChangePasswordForm";
import { Container } from "@material-ui/core";

function ChangePasswordPage(){
  return(
    <ProfileContainer>
      <Container component="main" maxWidth="md">
        <ChangePasswordForm/>
      </Container>
    </ProfileContainer>
  )
}

export default ChangePasswordPage;