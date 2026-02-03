import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

/**
 * ErrorBoundary Component
 *
 * 捕获子组件树中的JavaScript错误，记录错误日志，
 * 并显示备用UI而不是崩溃的组件树。
 *
 * @class ErrorBoundary
 * @extends React.Component
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(_error) {
    // 更新state使下一次渲染能够显示降级后的UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 可以将错误日志上报给服务器
    console.error('ErrorBoundary caught an error:', error);
    console.error('Error Info:', errorInfo);

    // 保存错误信息到state
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    // 刷新页面
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // 自定义降级UI
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
            {/* 错误图标 */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-red-500" />
              </div>
            </div>

            {/* 错误标题 */}
            <h1 className="text-3xl font-bold text-white mb-4">
              哎呀，出错了
            </h1>

            {/* 错误描述 */}
            <p className="text-gray-400 mb-8 leading-relaxed">
              应用程序遇到了意外错误。我们已经记录了这个问题，
              请尝试刷新页面或稍后再试。
            </p>

            {/* 错误详情（开发环境） */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-300 mb-2">
                  查看错误详情
                </summary>
                <div className="bg-red-950/50 border border-red-500/20 rounded-lg p-4 mt-2">
                  <p className="text-red-400 font-mono text-sm break-words">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <pre className="text-red-300/70 text-xs mt-2 overflow-auto max-h-40">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}

            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0066FF] hover:bg-[#0066FF]/80 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0066FF]/25"
              >
                <RefreshCw size={20} />
                <span>刷新页面</span>
              </button>

              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 border border-white/10"
              >
                <span>返回首页</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
