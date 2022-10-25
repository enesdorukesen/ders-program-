import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTeachers } from '../teachers/teachersSlice';
import { selectAllSchedule, createSchedule } from './scheduleSlice';
import { selectAllLessons } from '../lessons/lessonsSlice';

const Container = styled.div``;
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
  background-color: ${(props) => (props.selected ? 'red' : '#1e757b')};
  height: 30px;
  width: 60px;
  border: none;
  color: #f2ffdf;
  border-radius: 5px;
  margin: 1px;
  &:hover {
    color: #1e757b;
    background-color: #f2ffdf;
  }
`;
const UpdatePanel = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectAllTeachers);
  const [teacherId, setTeacherId] = useState();
  const lessonIds = useSelector(selectAllLessons)
    .filter((item) => item.isActive === true)
    .map((item) => item.id);
  const onChangeHandler = (e) => {
    let id = e.target.value;
    setTeacherId(id);
  };

  const buttonClickHandler = () => {
    // console.log(lessonIds);
    dispatch(createSchedule(teacherId));
  };

  return (
    <Container>
      <Select onChange={(e) => onChangeHandler(e)}>
        {teachers.map((teacher) => {
          return (
            <option
              value={teacher.id}
              key={teacher.id}
            >
              {teacher.name}
            </option>
          );
        })}
      </Select>
      <Button onClick={buttonClickHandler}>Create Schedule</Button>
    </Container>
  );
};

export default UpdatePanel;
