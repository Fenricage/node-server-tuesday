import { CLIENT_URL } from '../shared/utils/config';

const prepareImgSrcSets = (entries) => {
  let imgSrcSet = '';
  entries.forEach((item, index) => {
    const width = item.get(0).replace('_', '');
    const url = item.get(1);

    if (0 === index) {
      imgSrcSet += `${CLIENT_URL}/${url} ${width}w,`;
    } else if (entries.size === index + 1) {
      imgSrcSet += ` ${CLIENT_URL}/${url} ${width}w`;
    } else {
      imgSrcSet += ` ${CLIENT_URL}/${url} ${width}w,`;
    }
  });

  return imgSrcSet;
};

export default prepareImgSrcSets;
