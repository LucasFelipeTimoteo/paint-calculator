import React from 'react';
import RecommendationList from './RecommendationList';
import RecommendationTitle from './RecommendationTitle';
import { IResultInfoRecommendationProps } from './types';

export default function ResultInfoRecommendation({
  paintCansRecommendation
}: IResultInfoRecommendationProps) {
  return (
    <>
      <RecommendationTitle />
      <RecommendationList paintCansRecommendation={paintCansRecommendation} />
    </>
  );
}
