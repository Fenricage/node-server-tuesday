import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectCustomView from '../SelectCustomView/SelectCustomView';

class SelectCustom extends Component {

  onChangeHandler = (item) => {
    const {
      input: { onChange },
      toServerDataTransform,
    } = this.props;
    let mutatedItem = item;
    // при наличии функции-трансфорера - преобразуем
    if (toServerDataTransform) {
      mutatedItem = toServerDataTransform(item);
    }
    onChange(mutatedItem);
  }


  render() {
    const {
      input,
      meta,
      toSelectFormatValuesTransform,
    } = this.props;

    let transformedValue;

    /**
     * Преобразуем value (transformedValue будет подставлятся вместо value Selecta)
     * в формат для Select
     */
    if (input.value) {
      transformedValue = toSelectFormatValuesTransform(input.value);
    }

    return (
      <SelectCustomView
        {...this.props}
        onChangeHandler={this.onChangeHandler}
        transformedValue={transformedValue}
      />
    );
  }

}


SelectCustom.propTypes = {

};

SelectCustom.defaultProps = {

};

export default SelectCustom;
