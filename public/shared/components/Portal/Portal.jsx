import React, { forwardRef, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Portal.scss';

const PortalWithRef = forwardRef((props, ref) => (
  <section ref={ref}>
    {props.children}
  </section>
));

export default class Portal extends React.PureComponent {

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { forRef } = this.props;

    return ReactDOM.createPortal(
      <PortalWithRef ref={forRef}>
        {this.props.children}
      </PortalWithRef>,
      this.el,
    );
  }

}
