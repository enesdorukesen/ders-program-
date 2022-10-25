import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeacher } from './teachersSlice';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
  width: 400px;
  height: 60px;
  background-color: rgba(30, 117, 123, 0.15);
  margin: 0 2px;
`;
const AddBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  padding-top: 25px;
`;

const Input = styled.input`
  border: none;
  text-decoration: none;
  background-color: #f2ffdf;
  color: #1e757b;
  border-radius: 2px;
  margin: 1px;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

const Button = styled.button`
  height: 30px;
  background-color: #1e757b;
  border: none;
  color: #f2ffdf;
  border-radius: 5px;
  position: relative;
  left: 150px;
  top: -30px;
  &:hover {
    color: #1e757b;
    background-color: #f2ffdf;
  }
`;
const AddTeacher = () => {
  const dispatch = useDispatch();

  const [teacherName, setTeacherName] = useState('');
  const [teacherHours, setTeacherHours] = useState('');

  const onClickAddTeacher = () => {
    dispatch(addTeacher(teacherName, teacherHours));
    setTeacherName('');
  };

  const addUserLogic = Boolean(teacherName);

  return (
    <div>
      <Container>
        <AddBar>
          <label htmlFor=""></label>
          <Input
            type="text"
            id="TeacherName"
            onChange={(e) => setTeacherName(e.target.value)}
            value={teacherName}
            placeholder="Name"
          />
          <Input
            type="number"
            id="TeacherHours"
            onChange={(e) => setTeacherHours(e.target.value)}
            value={teacherHours}
            placeholder="Hours"
          />
          <Button
            disabled={!addUserLogic}
            onClick={onClickAddTeacher}
          >
            Add Teacher
          </Button>
        </AddBar>
      </Container>
    </div>
  );
};

export default AddTeacher;
