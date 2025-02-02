import styled from "styled-components";

export const Form = styled.View`
  margin-top: 28px;
  gap:20px;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: white;
    font-family: 'Montserrat-400';
    padding:5px;
`;

export const InputTitle = styled.TextInput`
  background: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius:20px;
  padding: 12px 0 12px 8px;
  font-size: 20px;
    font-family: 'Montserrat-400';
`;
export const InputDesc = styled.TextInput`
  background: #FFFFFF;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 20px;
   padding: 12px 0 12px 8px;
  font-size: 18px;
  font-family: 'Montserrat-400';
`;

export const Button = styled.TouchableOpacity`
    background-color: ${(props) => props.disabled ? "#999" : "#4BB543"};
    border-radius: 20px;
    width: 250px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-self: center;
    align-self: center;
`