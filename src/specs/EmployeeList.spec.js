import { render, screen } from '@testing-library/react';
import EmployeeList from '../components/EmployeeList';

beforeEach(() => {
  render(<EmployeeList />);
});
it('renders learn react link', () => {
  const listElement = screen.getByRole('list')
  expect(listElement.children.length).toBe(5);
});