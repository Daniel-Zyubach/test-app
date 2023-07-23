import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const CardContainer = styled.View`
  margin-bottom: 10px;
  background-color: white;
  border-radius: 8px;
  padding: 5px 0 12px;
`;
const CardImage = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 8px;
`;
const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
`;
const CardDetails = styled.View`
  flex-direction: row;
  align-items: center;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 12px 0;
`;
const CardPrice = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
const CardBtn = styled.Text`
  padding: 8px 18px;
  background-color: red;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 700;
  color: white;
`;

import { useNavigation } from "@react-navigation/native";
import { EScreens } from "../navigation/screens";

const Card = ({ url, title, price }) => {
  const navigation = useNavigation();
  const navigateToDetails = () => {
    navigation.navigate(EScreens.DETAILS);
  };

  return (
    <TouchableOpacity onPress={navigateToDetails}>
      <CardContainer>
        <CardImage source={{ uri: url }} resizeMode="contain" />
        <CardTitle>{title}</CardTitle>
        <CardDetails>
          <CardPrice>
            {price}
            <Text style={{ fontSize: 14, fontWeight: 400 }}>Р</Text>
          </CardPrice>
          <TouchableOpacity>
            <CardBtn>Хочу!</CardBtn>
          </TouchableOpacity>
        </CardDetails>
      </CardContainer>
    </TouchableOpacity>
  );
};

export default Card;
