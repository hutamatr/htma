import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { clientSlice, type IClientSlice } from './clientSlice';
import { type IModalSlice, modalSlice } from './modalSlice';
import { type IPortfolioSlice, portfolioSlice } from './portfolioSlice';

export const useStore = createWithEqualityFn<
  IClientSlice & IModalSlice & IPortfolioSlice
>()(
  (...a) => ({
    ...clientSlice(...a),
    ...modalSlice(...a),
    ...portfolioSlice(...a),
  }),
  shallow
);
