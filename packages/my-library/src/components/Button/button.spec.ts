import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import Button from './Button.vue';

describe('Button', () => {
  test('can render default', () => {
    render({
      components: { Button },
      template: '<Button>Sample</Button>',
    });
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Sample');
  });

  test('variant', () => {
    render({
      components: { Button },
      template: '<Button variant="secondary">Secondary</Button>',
    });
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn-secondary');
  });

  test('the testid is mapped to the button', () => {
    render({
      components: { Button },
      template: '<Button data-testid="abc" />',
    });
    const element = screen.getByTestId('abc');
    expect(element).toBeInTheDocument();
  });
});
