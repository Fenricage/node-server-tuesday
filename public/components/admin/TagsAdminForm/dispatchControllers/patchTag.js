import {
  patchTag as patchTagAction,
} from '../../../../actions/tags';

const patchTag = (callbackUpdateTags, tagId) => async (values, dispatch) => {

  try {
    const data = {
      code: values.get('tags'),
    };

    await dispatch(patchTagAction(tagId, data));
    callbackUpdateTags();
  } catch (e) {
    console.error('Patch tags is failed', { ...e });
  }
};

export default patchTag;
