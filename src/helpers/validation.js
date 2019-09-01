function validate(name, value) {
  switch(name) {
    case 'sessionName':
      if (!value) {
        return false;
      }

      if (value.length > 200) {
        return false;
      }

      return true;

    case 'voterCount':
      if (!value) {
        return false;
      }

      if (!isNaN(parseFloat(value)) && isFinite(value) && value > 0) {
        return true;
      }

      return false;

    case 'stories': 
      if (value.length > 0) {
        return true;
      }
    
      return false;

    default:
      return false;
  } 
}

export default validate;