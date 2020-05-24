var basicResponse = {
  "isSuccess": null,
  "errorCode": null,
  "errorMessage": null,
  "data": null,
  "timestamp": null, //new Date().gettime()
};

const makeJson = (params) => {
  var temp = { ...basicResponse };
  temp.isSuccess = true;
  temp.errorCode = null;
  temp.data = `${params}`;
  temp.timestamp = new Date().getTime();

  return temp;
};

export { makeJson };
