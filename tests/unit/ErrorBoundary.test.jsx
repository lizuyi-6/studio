import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

// 创建一个会抛出错误的组件
const ThrowError = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary', () => {
  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('should catch errors and display error UI', () => {
    // 抑制控制台错误输出
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('哎呀，出错了')).toBeInTheDocument();
    expect(screen.getByText(/应用程序遇到了意外错误/)).toBeInTheDocument();

    consoleError.mockRestore();
  });

  it('should display refresh button', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const refreshButton = screen.getByRole('button', { name: /刷新页面/ });
    expect(refreshButton).toBeInTheDocument();

    consoleError.mockRestore();
  });

  it('should display home link', () => {
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const homeLink = screen.getByRole('link', { name: /返回首页/ });
    expect(homeLink).toBeInTheDocument();

    consoleError.mockRestore();
  });
});
