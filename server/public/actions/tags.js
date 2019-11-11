import api from '../shared/api';
import { fromJS } from 'immutable';
import {
  TAGS_INIT,
  TAGS_FETCH_FAILURE,
  TAGS_FETCH_SUCCESS,
  TAGS_DELETE_TAG,
  TAGS_DELETE_TAG_FAILURE,
  TAGS_DELETE_TAG_SUCCESS,
  TAGS_CREATE_FETCH,
  TAGS_CREATE_FETCH_FAILURE,
  TAGS_CREATE_FETCH_SUCCESS,
  TAGS_PATCH_FETCH,
  TAGS_PATCH_FETCH_FAILURE,
  TAGS_PATCH_FETCH_SUCCESS,
} from '../shared/constants/tags';
// import { store } from '../index';


export const getAllTags = () => api.tags.getAll();

export const fetchAllATags = () => ({
  type: TAGS_INIT,
});

export const fetchAllATagsSuccess = tags => ({
  type: TAGS_FETCH_SUCCESS,
  payload: tags,
});

export const fetchAllTagsFailure = e => ({
  type: TAGS_FETCH_FAILURE,
  payload: e,
});

export const getAllTagsAndSet = queryParams => (dispatch) => {
  dispatch(fetchAllATags());
  return getAllTags(queryParams)
    .then((tags) => {
      dispatch(fetchAllATagsSuccess(fromJS(tags)));
    })
    .catch((e) => {
      dispatch(fetchAllTagsFailure(e));
    });
};


export const fetchCreateTags = () => ({
  type: TAGS_CREATE_FETCH,
});

export const createTagsFailure = () => ({
  type: TAGS_CREATE_FETCH_FAILURE,
});

export const createTagsSuccess = () => ({
  type: TAGS_CREATE_FETCH_SUCCESS,
});

export const createTags = tagsData => (dispatch) => {
  dispatch(fetchCreateTags());
  return api.tags.create(tagsData)
    .then((res) => {
      dispatch(createTagsSuccess());
      console.log('res', res);
    })
    .catch((e) => {
      dispatch(createTagsFailure());
      console.log('e', e);
    });
};


const fetchPatchTag = () => ({
  type: TAGS_PATCH_FETCH,
});

const patchTagFailure = () => ({
  type: TAGS_PATCH_FETCH_FAILURE,
});

const patchTagSuccess = () => ({
  type: TAGS_PATCH_FETCH_SUCCESS,
});

export const patchTag = (id, tagData) => (dispatch) => {

  dispatch(fetchPatchTag());
  console.log('id, tagData', id, tagData)
  return api.tags.patch(id, tagData)
    .then((res) => {
      dispatch(patchTagSuccess());
      console.log('res', res);
    })
    .catch((e) => {
      dispatch(patchTagFailure());
      console.log('e', e);
    });

};


export const reqSetDeletingStatus = (id) => {

  // const isDeleting = store.getState()
  //   .getIn(['tags', 'isDeleting'])
  //   .push(id);

  return {
    type: TAGS_DELETE_TAG,
    // payload: isDeleting,
    payload: [],
  };
};
export const deleteTagSuccess = (id) => {

  // const isDeleting = store.getState()
  //   .getIn(['tags', 'isDeleting'])
  //   .filter(item => item !== id);

  return {
    type: TAGS_DELETE_TAG_SUCCESS,
    // payload: isDeleting,
    payload: [],
  };
};


export const deleteTagFailure = (id) => {

  // const isDeleting = store.getState()
  //   .getIn(['tags', 'isDeleting'])
  //   .filter(item => item !== id);

  return {
    type: TAGS_DELETE_TAG_FAILURE,
    // payload: isDeleting,
    payload: [],
  };
};


export const deleteTag = id => async (dispatch) => {

  dispatch(reqSetDeletingStatus(id));

  return api.tags.deleteOne(id)
    .then(async (res) => {
      await dispatch(deleteTagSuccess(id));
      await dispatch(getAllTagsAndSet());
    })
    .catch((e) => {
      dispatch(deleteTagFailure(id));
    });

};