import React from 'react';
import { useParams } from 'react-router';

const Coin = () => {
  const { coinId } = useParams();
  return <div>Coin: {coinId}</div>;
};

export default Coin;
