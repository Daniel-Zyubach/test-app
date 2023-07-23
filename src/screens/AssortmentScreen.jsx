import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import Card from "../components/Card";

export const AssortmentScreen = () => {
  return (
    <ScrollView>
      <CardWrapper>
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
        <Card
          url="https://love-sushi.org/image/cache/catalog/poke-s-lososem-500x500.jpg"
          title="Поке с лососем"
          price="115"
        />
      </CardWrapper>
    </ScrollView>
  );
};

const CardWrapper = styled.View`
  padding: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  background-color: #f0f0f0;
`;
