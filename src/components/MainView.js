import React from "react";
import Countries from "./Countries";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  margin-top: 45px;
`;

const InputWrapper = styled.div`
  position: relative;
  padding: 20px 60px 20px 60px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 10px;
    align-items: start;
  }
`;

const CountryDiv = styled.div`
  flex-grow: 1;
  max-width: 80%;

  @media (max-width: 750px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 25px;
  }
`;

const InputCountry = styled.input`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  flex-grow: 1;
  padding: 20px;
  padding-left: 40px;

  @media (max-width: 750px) {
    max-width: 100%;
  }
`;

const Select = styled.select`
  width: 100%;
  max-width: 250px;
  padding: 20px;
  border-radius: 10px;
  outline: none;
`;

const initialValue = {
  byName: "",
  byRegion: "",
};

const MainView = React.memo(() => {
  const [filters, setFilters] = useState(initialValue);

  const handleChange = (e) => {
    setFilters({ ...filters, byName: e.target.value });
  };

  const handleSelect = (e) => {
    setFilters({ ...filters, byRegion: e.target.value });
  };

  return (
    <Container>
      <InputWrapper>
        <ion-icon name="search-outline" class="search"></ion-icon>
        <CountryDiv>
          <InputCountry
            className="shadow"
            type="text"
            placeholder="Search for country..."
            name="search-country"
            onChange={handleChange}
          ></InputCountry>
        </CountryDiv>
        <Select
          name="select-continent"
          className="shadow"
          onChange={handleSelect}
        >
          <option disabled value="none">
            Filter by region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </InputWrapper>
      <Countries
        url="https://restcountries.eu/rest/v2/all"
        byRegion={filters.byRegion}
        byName={filters.byName}
      />
    </Container>
  );
});

export default MainView;
