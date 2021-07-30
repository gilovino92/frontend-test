import { isObject, each, clone } from '@/helpers/underscore';

export const cloneDeep = object => {
  const deepClone = obj => {
    const cloneObj = clone(obj);

    each(cloneObj, function(value, key) {
      if (isObject(value)) {
        cloneObj[key] = deepClone(value);
      }
    });

    return cloneObj;
  };

  return deepClone(object);
};
