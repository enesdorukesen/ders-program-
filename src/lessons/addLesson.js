import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLesson, deleteLesson } from './lessonsSlice';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: 15px 15px 0 0;
  width: 685px;
  height: 60px;
  background-color: rgba(30, 117, 123, 0.15);
  margin: 0 2px;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;
  margin-right: 2px;
`;

const Select = styled.select`
  border: none;
  text-decoration: none;
  background-color: #f2ffdf;
  color: #1e757b;
  border-radius: 2px;
  margin: 1px;
  width: 170px;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

const Button = styled.button`
  height: 30px;
  width: 60px;
  background-color: #1e757b;
  border: none;
  color: #f2ffdf;
  border-radius: 5px;
  &:hover {
    color: #1e757b;
    background-color: #f2ffdf;
  }
`;
const DeleteButton = styled.button`
  height: 32px;
  width: 60px;
  background-color: #f2ffdf;
  border: none;
  color: #1e757b;
  border-radius: 5px;
  margin-left: 5px;
  &:hover {
    background-color: #1e757b;
    color: #f2ffdf;
    border: 1px solid #f2ffdf;
  }
`;

const AddLesson = () => {
  const dispatch = useDispatch();

  const [day, setDay] = useState('pazartesi');
  const teacher = '-';
  const onClickHandler = () => {
    dispatch(addLesson(day, teacher));
    console.log(day);
  };
  const deleteLessonHandler = () => {
    dispatch(deleteLesson());
  };

  return (
    <Container>
      <InnerContainer>
        <Select
          name="LessonDay"
          id="LessonDay"
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="pazartesi">Pazartesi</option>
          <option value="salı">Salı</option>
          <option value="çarşamba">Çarşamba</option>
          <option value="perşembe">Perşembe</option>
          <option value="cuma">Cuma</option>
        </Select>
        <Button onClick={onClickHandler}>Add Lesson</Button>
        <Button onClick={deleteLessonHandler}>Delete Lesson</Button>
      </InnerContainer>
    </Container>
  );
};

export default AddLesson;
