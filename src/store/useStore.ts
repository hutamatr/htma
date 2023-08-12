import { create } from 'zustand';

import { clientSlice, IClientSlice } from './clientSlice';

export const useStore = create<IClientSlice>((...a) => ({
  ...clientSlice(...a),
}));
