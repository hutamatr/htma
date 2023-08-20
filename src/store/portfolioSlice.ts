import { StateCreator } from 'zustand';

export interface IPortfolioSlice {
  portfolioData: IPortfolio | null;
  addPortfolio: (_data: IPortfolio) => void;
}

export const portfolioSlice: StateCreator<
  IPortfolioSlice,
  [],
  [],
  IPortfolioSlice
> = (set) => ({
  portfolioData: null,
  addPortfolio: (data) => set({ portfolioData: data }),
});
