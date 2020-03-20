import styled from 'styled-components'

export const Input = styled.input`
border: none;
height: 30px;
line-height: none;
font-style: italic;
padding-left: 5px;
width: 180px;
&:focus {
  border: 2px solid #FF9900;
  outline-color: #FF9900;
  outline-offset: 3px;
}
`

export const CardWrapper = styled.section`
z-index: 1;
position: absolute;
top: 50%;
left: 50%;
width: 280px;
transform: translate(-50%, -50%);
border: solid #FF9900 3px;
border-radius: 5%;
background: rgba(0, 0, 0, 0.8);
`


export const RsvpStyle = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 15px;
`

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const RadioButtonWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 70px;
@media (min-width: 668px) {
  flex-direction: row;
}
`

export const RadioInput = styled.input`
&:focus {
  border: 2px solid #FF9900;
  outline-color: #FF9900;
  outline-offset: 3px;
}
`

export const TextArea = styled.textarea`
border: none;
height: 90px;
width: 180px;
line-height: none;
padding-left: 5px;
font-style: italic;
&:focus {
  border: 2px solid #FF9900;
  outline-color: #FF9900;
  outline-offset: 3px;
}
`