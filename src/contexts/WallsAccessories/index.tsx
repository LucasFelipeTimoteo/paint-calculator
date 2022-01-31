import React, { createContext } from 'react';
import useDoorsNumber from '../../hooks/calculator/wallsAccessories/useDoorsNumber';
import useWindowsNumber from '../../hooks/calculator/wallsAccessories/useWindowsNumber';
import { IWallsAccessoriesContext, IWallsAccessoriesProviderProps } from './types';

export const WallsAccessoriesContext = createContext({} as IWallsAccessoriesContext)

export default function WallsAccessoriesProvider({
  children
}: IWallsAccessoriesProviderProps) {
  const {
    doorsNumber,
    handleDoorsNumber,
    handleResetDoorsNumber
  } = useDoorsNumber()
  const {
    windowsNumber,
    handleWindowsNumber,
    handleResetWindowsNumber
  } = useWindowsNumber()

  const providerValues = {
    doorsNumber,
    handleDoorsNumber,
    handleResetDoorsNumber,
    windowsNumber,
    handleWindowsNumber,
    handleResetWindowsNumber
  }

  return (
    <WallsAccessoriesContext.Provider value={providerValues}>
      {children}
    </WallsAccessoriesContext.Provider>
  );
}