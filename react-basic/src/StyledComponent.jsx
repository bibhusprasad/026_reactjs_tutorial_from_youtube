import styled from 'styled-components'

function StyledComponent() {

  //This is one way to use styled component
  const Heading = styled.h2`
    color:red;
    border: 1px solid green;
    border-radius:5px;
    margin:20px;
    padding:10px
    `
  //This is another way to use styled component
  const SubHeading = styled.h2({
    color: 'blue',
    border: '1px solid brown',
    borderRadius: '5px',
    margin: '20px',
    padding: '10px'
  })

  const StyButton = styled.button`
    color:red;
    width:130px;
    height:40px;
    margin:20px;
    `

  return (
    <div>
      <Heading>Styled Component Heading 1</Heading>
      <Heading>Styled Component Heading 2</Heading>
      <Heading>Styled Component Heading 3</Heading>

      <SubHeading>Styled Component SubHeading 1</SubHeading>
      <SubHeading>Styled Component SubHeading 2</SubHeading>
      <SubHeading>Styled Component SubHeading 3</SubHeading>
      <StyButton>Login</StyButton>
      <StyButton>Sign Up</StyButton>
    </div>
  )
}

export default StyledComponent;