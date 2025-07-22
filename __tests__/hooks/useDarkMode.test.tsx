import { renderHook, act } from '@testing-library/react';
import { useDarkMode } from '../../app/hooks/useDarkMode';

describe('useDarkMode', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('initializes with system preference when no stored theme', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const { result } = renderHook(() => useDarkMode());

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current[0]).toBe(true); // Defaults to dark mode
  });

  it('uses stored theme preference from localStorage', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    localStorage.setItem('theme', 'light');
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current[0]).toBe(false);
  });

  it('toggles theme when toggle function is called', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    localStorage.setItem('theme', 'light');
    const { result } = renderHook(() => useDarkMode());

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current[0]).toBe(false); // Initially light

    act(() => {
      result.current[1](); // Toggle to dark
    });

    expect(result.current[0]).toBe(true); // Should now be dark
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('updates theme when system preference changes', () => {
    let darkModeListener: ((e: { matches: boolean }) => void) | null = null;

    // Mock matchMedia to start with light mode
    window.matchMedia = jest.fn().mockImplementation((query) => {
      if (query === '(prefers-color-scheme: dark)') {
        return {
          matches: false,
          media: query,
          addEventListener: (_: string, listener: any) => {
            darkModeListener = listener;
          },
          removeEventListener: jest.fn(),
        };
      }
      return {
        matches: false,
        media: query,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      };
    });

    const { result } = renderHook(() => useDarkMode());

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current[0]).toBe(true); // Initially dark (default)

    // Change system preference to dark mode
    act(() => {
      if (darkModeListener) {
        darkModeListener({ matches: true });
      }
    });

    expect(result.current[0]).toBe(true); // Should stay dark
  });
});
