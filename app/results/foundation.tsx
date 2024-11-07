import React from 'react';
import { Foundation } from '../../../components/results/Foundation';
import { seasonalData } from '../../../data/seasonal-color-data';

export default function FoundationScreen() {
  return <Foundation seasonalData={seasonalData} />;
}