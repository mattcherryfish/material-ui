import React from 'react';
import Container from '@material-ui/core/Container';
import StyledButtonA from '../src/StyledButtonA';
import StyledButtonB from '../src/StyledButtonB';

export default function Index() {
  return (
    <>
      <Container>
        <StyledButtonA />
      </Container>
      <Container>
        <StyledButtonB />
      </Container>
    </>
  );
}
