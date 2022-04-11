import React from 'react';
import Loader from 'react-js-loader';
import styled from 'styled-components';

const LoaderElement = styled.div`
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
`;

export const DataLoader = () => {
  // if (true) {
  return (
    <LoaderElement className={'item'}>
      <Loader
        type="bubble-top"
        bgColor={'#FFFFFF'}
        color={'#FFFFFF'}
        size={50}
      />
    </LoaderElement>
  );
  // }
  // return null;
};
