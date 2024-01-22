import React, { Suspense } from 'react';
import ErrorPage from '../../../../pages/Error/ui/ErrorPage';

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line n/handle-callback-err
  static getDerivedStateFromError (error) {
    return { hasError: true };
  }

  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo);
  }

  render () {
    if (this.state.hasError) {
      return <Suspense fallback={''}><ErrorPage /></Suspense>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
