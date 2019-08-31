import React, { useState }  from 'react';
import classNames from 'classnames';
import { Redirect } from 'react-router';
import './planning.css';

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
function Plannig(props) {
  const [redirectId, setRedirect] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const [values, setValues] = useState({
    isSubmitted: false,
    sessionName: {
      value: '',
      isPristine: true,
      isValid: false
    },
    voterCount: {
      value: 0,
      isPristine: true,
      isValid: false
    },
    stories: {
      value: '',
      isPristine: true,
      isValid: false
    }
  });

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({
      ...values, 
      [name]: {
        value,
        isPristine: false,
        isValid: validate(name, value)
      }
    })
  }

  const isFormValid = () => {
    for (const key in values) {

      if (values.hasOwnProperty(key)) {
        const isValid = values[key].isValid;

        if (!isValid && key !== 'isSubmitted') {
          return false;
        }
      }
    }

    return true;
  }

  const showErrors = () => {
    setValues({
      ...values,
      isSubmitted: true
    });
  }

  const submit = (evt) => {
    evt.preventDefault();
    if (isFormValid()) {
      setSubmitting(true);

      const stories = values.stories.value.split('\n');
      const obj = {
        sessionName: values.sessionName.value,
        voterCount: values.voterCount.value,
        stories
      };
      props.saveToDB(obj)
            .then((res) => setRedirect(res.id))
            .catch(() => alert('there is another session with same name'));
    } else {
      showErrors();
    };
  }
  return (
    <>
      {redirectId && <Redirect to={`/master/${redirectId}`} />}
      <form className="ty-planning" onSubmit={submit}>
        <div className="ty-planning-top">
          <span>Session Name</span>
          
          <div className="ty-planning__input-container">
            <input name="sessionName" onChange={handleInputChange}
              className="ty-planning__input" value={values.sessionName.value}></input>
            <div className={
              classNames({ 
                'ty-planning__input--error': true, 
                'ty-planning__input--error--active': (values.isSubmitted || !values.sessionName.isPristine) && !values.sessionName.isValid
                }
              )}>
              This area's length should be least 1 and maximum 200 char.
            </div>
          </div>
          <span>Numbers of Voters</span>
          <div className="ty-planning__input-container">
          <input name="voterCount" onChange={handleInputChange}
            className="ty-planning__input" value={values.voterCount.value}></input>
            <div className={
              classNames({ 
                'ty-planning__input--error': true, 
                'ty-planning__input--error--active': (values.isSubmitted || !values.voterCount.isPristine) && !values.voterCount.isValid
                }
              )}>            
                This area's value should be valid number.
            </div>
          </div>
        </div>
        <div>
          <div>Post Your Story List</div>
          <div className="ty-planning__story-list">
            <textarea rows="10" name="stories" onChange={handleInputChange} value={values.stories.value} className="ty-planing__story-list--input" >
            </textarea>

            <div className={
              classNames({ 
                'ty-planning__input--error': true, 
                'ty-planning__input--error--active': (values.isSubmitted || !values.stories.isPristine) && !values.stories.isValid
                }
              )}>            
                There should be least one item.
            </div>
          </div>
        </div>
        <div className="ty-planning__bottom">
          {isSubmitting ? 
              <span>Wait...</span>
            : <input type="submit" value="Start Session"></input>
          }
        </div>
      </form>
  </>
  );
}

export default Plannig;