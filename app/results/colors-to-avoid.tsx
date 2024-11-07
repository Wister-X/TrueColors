import React from 'react';
import { ColorsToAvoid } from '../../../components/results/ColorsToAvoid';
import { seasonalData } from '../../../data/seasonal-color-data';

export default function ColorsToAvoidScreen() {
  return <ColorsToAvoid seasonalData={seasonalData} />;
}