import styled from "styled-components";

const NotfoundDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotfoundContainer = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: aliceblue;
`;

const Para = styled.p`
  font-size: 1.05rem;
  color: whitesmoke;
`;

export default function NotFound() {
  return (
    <NotfoundDiv>
      <NotfoundContainer>
        <Heading>Thanks for Visiting</Heading>
        <Para>Currently We are working on new UI!</Para>
      </NotfoundContainer>
    </NotfoundDiv>
  );
}
