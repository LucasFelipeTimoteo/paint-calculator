import React from 'react';
import ResultButtons from '../ResultButtons';
import ResultInfo from '../ResultInfo';
import { IResultProps } from './types';

export default function Result({
  handlePrevFormStep,
  handleResetFormStep
}: IResultProps) {
  return (
    <>
      <ResultInfo />
      <ResultButtons
        handlePrevFormStep={handlePrevFormStep}
        handleResetFormStep={handleResetFormStep}
      />
    </>
  );
}
