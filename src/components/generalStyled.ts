import styled from "styled-components/native";


export const BaseView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;

`;
export const ViewContainer = styled.View`
  background-color: #fff;
 padding: 10px;

`;
export const Spacer = styled.View`
  height: 20px

`;
export const BoldText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
`;
export const MediumText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 18px;
`;
export const RegularText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;
export const Button = styled.TouchableOpacity`
  width: 110px;
  height: 40px;
  border-radius: 20px;
  background: #e6e6e6;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
`;
