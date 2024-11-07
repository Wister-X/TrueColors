import React from 'react';
import { Accessories } from '../../../components/results/Accessories';
import { seasonalData } from '../../../data/seasonal-color-data';

export default function AccessoriesScreen() {
  return <Accessories seasonalData={seasonalData} />;
}