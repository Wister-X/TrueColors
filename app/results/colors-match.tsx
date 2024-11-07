import React from 'react';
import { ColorsMatch } from '../../../components/results/ColorsMatch';
import { seasonalData } from '../../../data/seasonal-color-data';

export default function ColorsMatchScreen() {
  return <ColorsMatch seasonalData={seasonalData} />;
}