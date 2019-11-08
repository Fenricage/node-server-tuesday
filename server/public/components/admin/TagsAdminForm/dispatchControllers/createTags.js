import {
  createTags as createTagsAction,
} from '../../../../actions/tags';

const createTags = callbackUpdateTags => async (values, dispatch) => {
  try {
    await dispatch(createTagsAction(values));
    callbackUpdateTags();
  } catch (e) {
    console.error('Create tags is failed', { ...e });
  }
};

export default createTags;
