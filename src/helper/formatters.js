const cvvFomatter = (object) => {
  var numbers = /^[0-9]+$/;
  if (object.target.value.match(numbers)) {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength);
    }
  } else {
    object.target.value = "";
  }
};

const nameFormatter = (object) => {
  var str = /[^A-Za-z]/gi;
  if (object.target.value.match(str)) {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength);
    }
  }
  if (!object.target.value.match(str)) {
    object.target.value.replace(/[^A-Za-z]/gi, "");
  }
};

const fullNameFormatter = (object) => {
  var str = /[^A-Za-z ]/gi;
  if (object.target.value.match(str)) {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength);
    }
  }
  if (!object.target.value.match(str)) {
    object.target.value.replace(/[^A-Za-z ]/gi, "");
  }
};

export { cvvFomatter, nameFormatter ,fullNameFormatter};
