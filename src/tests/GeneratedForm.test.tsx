import { render, screen, fireEvent } from '@testing-library/react';
import GeneratedForm from '../components/GeneratedForm';
import { JSONSchema } from '../types/schema';

const testSchema: JSONSchema = {
  formTitle: 'Test Form',
  formDescription: 'Test the form functionality',
  fields: [
    { id: 'name', type: 'text', label: 'Name', required: true },
  ],
};

test('renders form and submits data', () => {
  render(<GeneratedForm schema={testSchema} />);

  // Find input element by label
  const input = screen.getByLabelText(/name/i) as HTMLInputElement;

  // Simulate user input and form submission
  fireEvent.change(input, { target: { value: 'John Doe' } });
  fireEvent.submit(screen.getByRole('button'));

  // Assert the value
  expect(input.value).toBe('John Doe');
});

