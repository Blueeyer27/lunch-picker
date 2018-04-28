import { Component } from 'react';
import { withAlert } from 'react-alert';

class AppBoundary extends Component {
  componentDidCatch = () => {
    const { alert, onClose } = this.props;
    alert.error('Oops, something went wrong...', { onClose });
  };

  componentDidUpdate = previousProps => {
    const { alert, error, success, onClose } = this.props;
    if (error !== previousProps.error && error) {
      alert.error(error, { onClose });
    }
    if (success !== previousProps.success && success) {
      alert.success(success, { onClose });
    }
  };

  render() {
    return this.props.children;
  }
}

export default withAlert(AppBoundary);
