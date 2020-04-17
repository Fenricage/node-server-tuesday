import React from 'react';
import PropTypes from 'prop-types';
import {
  Field,
} from 'redux-form/immutable';
import Textarea from '../../../../shared/components/Textarea/Textarea';
import './ArticleParagraph.scss';

const ArticleParagraph = ({ fields, field, ...other }) => (
  <Field
    placeholder="Your text ..."
    title="Paragraph"
    name={`${field}.value`}
    component={Textarea}
  />
);

ArticleParagraph.propTypes = {
  fields: PropTypes.shape(),
};


export default ArticleParagraph;
