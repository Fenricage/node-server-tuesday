import React, {
  Component, Fragment, useState, useEffect, useRef,
} from 'react';
import { connect } from 'react-redux';
// import { Header, HomeMainPage, ArticleDetailPage } from 'Components';
import {
  TransitionGroup, CSSTransition, SwitchTransition, Transition, ReplaceTransition,
} from 'react-transition-group';
import { List, fromJS, Map } from 'immutable';
import Header from '../../../components/home/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAllArticleCategories } from '../../../actions/articleCategories';
import { getAllTagsAndSet } from '../../../actions/tags';
import './HomeLayout.scss';

// сначала возвращает, потом сетит в useEffect
// при первом вызове возвращает undefined
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const duration = 300;

const defaultFadeStyles = {
  transition: `all ${duration}ms ease-in-out`,
  transform: 'translateY(20px)',
  opacity: 0,
  color: 'red',
};

const defaultDisplayFadeStyles = {
  display: 'none',
};

const transitionFadeStyles = {
  entering: {
    opacity: 1,
    transform: 'translateY(0px)',
    display: 'block',
  },
  entered: {
    opacity: 1,
    transform: 'translateY(0px)',
    display: 'block',
  },
  exiting: {
    opacity: 0,
    transform: 'translateY(20px)',
    //     display: 'block',
  },
  exited: {
    opacity: 0,
    transform: 'translateY(20px)',
    //     display: 'block',
  },
};

const displayFadeStyles = {
  entering: {
    display: 'block',
  },
  entered: {
    display: 'block',
  },
  exiting: {
    display: 'block',
  },
  exited: {
    display: 'none',
  },
};

const Fade = ({
  in: inProp,
  defaultFadeStyles,
  transitionFadeStyles,
  defaultDisplayFadeStyles,
  fadeCounter,
  itemsNodes,
  handleChangeFadeStatus,
  children
}) => {


  const defaultDisplayFadeStylesAfterMutate = {};

  // const prevAmounts = usePrevious({ items, inProp, fadeCounter });

  // useEffect(() => {
  //   //
  //   if (prevAmounts !== undefined && !items.equals(prevAmounts.items)) {
  //     // console.log('items nodes changed', items);
  //     handleChangeFadeStatus(!inProp);
  //   }
  // }, [inProp, handleChangeFadeStatus, items, prevAmounts]);

  // устанавливает display: none если еще ни разу не активировали fade анимацию
  // if (!fadeCounter) {
  //   defaultDisplayFadeStylesAfterMutate = defaultDisplayFadeStyles;
  // }



  // let displayedNodes = itemsNodes;

  // if (!inProp && !prevAmounts) {
  //   displayedNodes = itemsNodes;
  // } else if (!inProp) {
  //   displayedNodes = prevAmounts.items.map((item, idx) => (
  //     <span style={{ marginLeft: '8px' }} key={idx}>{item.get('name')}</span>
  //   ));
  // } else {
  //   displayedNodes = itemsNodes;
  // }
  // console.log('inProp', inProp)
  // if(prevAmounts) {
  //   console.log('prevAmounts.inProp', prevAmounts.inProp)
  // }


  return (

    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultFadeStyles,
          ...defaultDisplayFadeStylesAfterMutate,
          ...transitionFadeStyles[state],
        }}
        >
          <div>
            {children}
          </div>
          <div>
            {inProp.toString()}
          </div>
        </div>
      )}
    </Transition>
  );
};

class HomeLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: fromJS([
        {
          name: '1',
        },
      ]),
      fadeStatus: true,
      defaultFadeStyles,
      transitionFadeStyles,
      displayFadeStyles,
      fadeCounter: 0,
    };
  }


  componentDidMount() {
    const {
      getAllArticleCategoriesDispatch,
      getAllTagsAndSetDispatch,
    } = this.props;
    //  запрашиваем категории, чтобы потом пришить их к навигации
    // getAllArticleCategoriesDispatch();
    // getAllTagsAndSetDispatch();
  }

  handleAddItem = (e) => {


    this.handleChangeFadeStatus(!this.state.fadeStatus);



    setTimeout(() => {
      this.handleChangeFadeStatus(!this.state.fadeStatus);

      const newItems = this.state.items.push(Map({
        name: Math.random(),
      }));

      // console.log('this.state.fadeStatus', this.state.fadeStatus)
      this.setState((prevState) => {
        if (prevState.fadeStatus) {
          return {
            ...prevState,
            items: newItems,
          };
        }
      });
    }, duration)
  };

  handleChangeFadeStatus = (status) => {

    if (status) {
      this.setState(prevState => ({
        ...prevState,
        transitionFadeStyles: displayFadeStyles,
        fadeStatus: status,
        fadeCounter: prevState.fadeCounter + 1,
      }));

      setTimeout(() => {
        this.setState(prevState => ({
          ...prevState,
          transitionFadeStyles,
          fadeStatus: status,
          fadeCounter: prevState.fadeCounter + 1,
        }));
      }, 0);
    } else {

      this.setState(prevState => ({
        ...prevState,
        transitionFadeStyles,
        fadeStatus: status,
        fadeCounter: prevState.fadeCounter + 1,
      }));

      setTimeout(() => {


        this.setState(prevState => ({
          ...prevState,
          transitionFadeStyles: displayFadeStyles,
          fadeStatus: status,
          fadeCounter: prevState.fadeCounter + 1,
        }));
      }, duration);
    }

    // this.setState(prevState => ({
    //   ...prevState,
    //   transitionFadeStyles,
    //   fadeStatus: status,
    // }));
  }


  render() {
    const {
      match,
      location,
      isLoadedArticleCategories,
      isLoadedTags,
      children,
    } = this.props;

    const {
      items,
      defaultFadeStyles,
      transitionFadeStyles,
      displayFadeStyles,
      fadeCounter,
    } = this.state;


    // ждем пока загрузятся категории статей - те что в навигации будут
    // if (!isLoadedArticleCategories && !isLoadedTags) {
    //   return <p>loading...</p>;
    // }


    const itemsNodes = items.map((item, idx) => (
      <span style={{ marginLeft: '8px' }} key={idx}>{item.get('name')}</span>
    ));

    return (
      <Fragment>
        <section className="l-home">
          <Header />
          <Fade
            in={this.state.fadeStatus}
            defaultFadeStyles={defaultFadeStyles}
            transitionFadeStyles={transitionFadeStyles}
            displayFadeStyles={displayFadeStyles}
            defaultDisplayFadeStyles={defaultDisplayFadeStyles}
            fadeCounter={fadeCounter}
            items={items}
            fadeStatus={this.state.fadeStatus}
            handleChangeFadeStatus={this.handleChangeFadeStatus}
          >
            {itemsNodes}
          </Fade>
          <div>
            <button type="button" onClick={this.handleAddItem}>
              добавить item
            </button>
            <button type="button" onClick={e => this.handleChangeFadeStatus(!this.state.fadeStatus)}>
              изменить fadeStatus
            </button>
          </div>
          <main>
            {children}
          </main>
        </section>
        <Footer />
      </Fragment>
    );
  }

}


const mapStateToProps = (state, ownProps) => ({
  isLoadedArticleCategories: state.getIn(['articleCategories', 'isLoaded']),
  isLoadedTags: state.getIn(['tags', 'isLoaded']),
});

const mapDispatchToProps = dispatch => ({
  getAllArticleCategoriesDispatch: () => dispatch(getAllArticleCategories()),
  getAllTagsAndSetDispatch: () => dispatch(getAllTagsAndSet()),
});


const HomeLayoutConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeLayout);

export const getLayout = page => <HomeLayoutConnected>{page}</HomeLayoutConnected>;

export default HomeLayoutConnected;
