import React from 'react';
import { ColorSeasonAnalysis } from '../../../components/results/ColorSeasonAnalysis';
import { seasonalData } from '../../../data/seasonal-color-data';

export default function ColorSeasonAnalysisScreen() {
  return <ColorSeasonAnalysis seasonalData={seasonalData} />;
}