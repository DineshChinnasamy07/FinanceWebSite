import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      message: error && error.message ? error.message : 'Unknown rendering error',
    };
  }

  componentDidCatch(error, info) {
    if (typeof console !== 'undefined' && console.error) {
      console.error('React render error:', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            fontFamily: 'system-ui, sans-serif',
            background: '#f4f6f4',
            color: '#15231f',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
              Something went wrong
            </h1>
            <p style={{ marginBottom: '1rem', color: '#5f7168' }}>
              The page failed to render. Please refresh and try again.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              style={{
                minHeight: '2.75rem',
                padding: '0.65rem 1.2rem',
                border: 0,
                borderRadius: '0.65rem',
                background: '#b08a2e',
                color: '#fff',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
