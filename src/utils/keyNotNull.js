/* eslint-disable no-prototype-builtins */
export default k => {
    return d => {
      return d.hasOwnProperty(k) && d[k] !== null && !Number.isNaN(d[k]);
    };
  };