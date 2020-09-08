import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import DateCard from './index';

describe('components/ArticleWrapper', () => {
  test('Should render without arguments', async () => {
    render(<DateCard />);
  });
});
