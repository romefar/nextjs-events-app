import React from 'react';
import { notification } from 'antd';

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch = (error, info) => {
    const description = process.env.NODE_ENV === 'development' ? error.message : 'An error has occurred.';
    notification.error({
      message: 'Error',
      description
    });
  }

  render = () => {
    return this.props.children;
  }
}
