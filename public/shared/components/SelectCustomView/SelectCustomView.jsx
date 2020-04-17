import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Immutable from 'immutable';


const SelectCustomView = ({
  title,
  className,
  options,
  onChangeHandler,
  transformedValue,
  optionalButtonText,
  optionalButtonHandler,
}) => (
  <section className={`form-row ${className}`}>
    <section className="form-row__title-box">
      <h3>{title}</h3>
      {
        optionalButtonText && optionalButtonHandler ?
          (
            <button
              type="button"
              onClick={optionalButtonHandler}
            >
              {optionalButtonText}
            </button>
          ) :
          null
      }
    </section>
    <section className="form-row__wrap">
      <section className="form-row__field">
        <Select
          value={transformedValue || undefined}
          options={options}
          className="react-select"
          classNamePrefix="react-select"
          blurInputOnSelect
          onChange={onChangeHandler}
          noOptionsMessage={() => 'Совпадений не найдено'}
        />
      </section>
    </section>
  </section>
);

SelectCustomView.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.instanceOf(Immutable.Iterable),
  ]).isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  transformedValue: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
};

SelectCustomView.defaultProps = {
  className: '',
  transformedValue: undefined,
};

export default SelectCustomView;


// ref={input => this.secondSelect = input}
// onMenuClose={() => this.secondSelect.blur()}
