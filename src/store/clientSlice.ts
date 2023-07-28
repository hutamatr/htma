import { StateCreator } from 'zustand';

export interface IClientSlice {
  isClient: boolean;
  clientHandler: () => void;
}

export const clientSlice: StateCreator<IClientSlice, [], [], IClientSlice> = (
  set
) => ({
  isClient: false,
  clientHandler: () => set({ isClient: true }),
});
