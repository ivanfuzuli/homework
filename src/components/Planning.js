import React, { useState }  from 'react';
import validate from '../helpers/validation';
import { Redirect } from 'react-router';
import styled, { css } from 'styled-components';

const S = {};
S.Container = styled.div`
  flex-grow: 1;
  margin: 5px;
`
S.TopArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

S.InputContainer = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
`;

S.InputBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

S.StoryList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

S.InputError = styled.div`
  max-width: 300px;
  color: brown;
  opacity: 0;
  transition: opacity 0.3s;

  ${props =>
    props.invalid &&
    css`
      opacity: 1
    `};
`;

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

  const isRowInValid = name => {
    return (values.isSubmitted || !values[name].isPristine) && !values[name].isValid
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
      <S.Container>
      <form onSubmit={submit}>
        <S.TopArea>
          <span>Session Name</span>
          
          <S.InputContainer>
            <input name="sessionName" onChange={handleInputChange}
              className="ty-planning__input" value={values.sessionName.value}></input>
            <S.InputError invalid={isRowInValid('sessionName')}>
              This area's length should be least 1 and maximum 200 char.
            </S.InputError>
          </S.InputContainer>
          <span>Numbers of Voters</span>
          <S.InputContainer>
          <input name="voterCount" onChange={handleInputChange}
            className="ty-planning__input" value={values.voterCount.value}></input>
            <S.InputError invalid={isRowInValid('voterCount')}>
                This area's value should be valid number.
            </S.InputError>
          </S.InputContainer>
        </S.TopArea>
        <div>
          <div>Post Your Story List</div>
          <S.StoryList>
            <textarea rows="10" name="stories" onChange={handleInputChange} value={values.stories.value} className="ty-planing__story-list--input" >
            </textarea>

            <S.InputError invalid={isRowInValid('stories')}>            
                There should be least one item.
            </S.InputError>
          </S.StoryList>
        </div>
        <S.InputBottom>
          {isSubmitting ? 
              <span>Wait...</span>
            : <input type="submit" value="Start Session"></input>
          }
        </S.InputBottom>
      </form>
      </S.Container>
  </>
  );
}

export default Plannig;