import { StateCreator } from 'zustand';

export interface IModalSlice {
  isModalShow: boolean;
  showModalHandler: () => void;
}

export const modalSlice: StateCreator<IModalSlice, [], [], IModalSlice> = (
  set
) => ({
  isModalShow: false,
  showModalHandler: () =>
    set((state) => ({
      isModalShow: !state.isModalShow,
    })),
});
