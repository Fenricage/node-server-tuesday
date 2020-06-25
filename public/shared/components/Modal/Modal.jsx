import React, { cloneElement, Component, createRef } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import noScroll from 'no-scroll';
import Portal from '../Portal/Portal';

import './Modal.scss';


class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortal: this.props.open,
    };
    this.modal = createRef(null);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // если следующий пропс open: true, а предыдущее состояние портала false
    // то пора открывать портал
    if (!prevState.showPortal && nextProps.open) {
      return {
        showPortal: true,
      };
    }

    // TODO(@fenricage): убрать как появится CSSTransitionGroup
    if (prevState.showPortal && !nextProps.open) {
      return {
        showPortal: false,
      };
    }

    return null;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escapeHandle);
    if (this.props.open) {
      this.handleOpen();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showPortal && !this.state.showPortal) {
      this.handleClose();
    } else if (!prevProps.open && this.props.open) {
      this.handleOpen();
    }
  }

  componentWillUnmount() {
    this.handleClose();
    document.removeEventListener('keydown', this.escapeHandle);
  }

  handleOpen = () => {
    noScroll.on();
  };

  handleClose = () => {
    // TODO(@fenticage): убирать переда этим html.style.scrollBehavior: smooth
    noScroll.off();
  };

  handleCloseModal = (event) => {
    this.props.onClose(event);

    // TODO(@fenricage): повесить showPortal на CSSTranisitionGroup на onExited
    // this.setState({
    //   showPortal: false,
    // });
  };

  handleSmokeCloseModal = (e) => {
    if (!this.modal.current.contains(e.target)) {
      return this.handleCloseModal(e);
    }
    return false;
  }

  escapeHandle = (event) => {
    if ('Escape' === event.key) {
      return this.props.onClose(event);
    }
  };

  render() {
    const {
      className,
      closeNode,
      children,
      smoke,
    } = this.props;

    const {
      showPortal,
    } = this.state;

    if (!showPortal) {
      return null;
    }

    const closeNodeMutated = cloneElement(
      closeNode,
      {
        className: cs('modal__close-node', {
          [`${className}__close-node`]: className,
        }),
      },
    );

    return (
      <Portal>
        <div
          className={cs({
            modal: true,
            [`${className}`]: className,
          })}
          onClick={this.handleSmokeCloseModal}
        >
          <div
            className={cs('modal__content-box', {
              [`${className}__content-box`]: className,
            })}
            ref={this.modal}
          >
            <button
              className={cs('modal__close', {
                [`${className}__close`]: className,
              })}
              onClick={this.handleCloseModal}
            >
              {closeNodeMutated}
            </button>
            <div
              className={cs('modal__content', {
                [`${className}__content`]: className,
              })}
            >
              {children}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}


Modal.propTypes = {
  closeNode: PropTypes.element,
  className: PropTypes.string,
};

Modal.defaultProps = {
  closeNode: <span />,
  className: undefined,
};

export default Modal;
