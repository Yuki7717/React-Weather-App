import React from "react";
import styled from "styled-components";

export const Results = ({ results }) => {
  const { country, cityName, temperature, conditionText, icon, localtime } =
    results;
  return (
    <>
      {cityName && <SResultsCity>{cityName}</SResultsCity>}
      {country && <SResultsCountry>{country}</SResultsCountry>}
      {localtime && <SResultsCity>{localtime}</SResultsCity>}
      {temperature && (
        <SResultsTemp>
          {temperature}
          <span>℃</span>
        </SResultsTemp>
      )}
      {conditionText && (
        <SResultsCondition>
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </SResultsCondition>
      )}
    </>
  );
};

const SResultsCity = styled.div`
  font-size: 4rem;
`;

const SResultsCountry = styled.div`
  font-size: 2rem;
`;

const SResultsTemp = styled.div`
  font-size: 6rem;
  margin: 10px 0;
  color: #f15186;
  span {
    font-size: 3rem;
    color: #333;
  }
`;

const SResultsCondition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
`;
