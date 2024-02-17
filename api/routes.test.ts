import { fetchCategories } from './routes'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(['cat1', 'cat2', 'cat3']),
  }),
) as jest.Mock;

it('should test fetch categories', () => {
  const cats = fetchCategories()
  expect(fetch).toHaveBeenCalledTimes(1)
})