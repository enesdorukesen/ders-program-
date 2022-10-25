import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTeacher, selectAllTeachers } from './teachersSlice';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 15px 15px;
  width: 400px;
  background-color: rgba(30, 117, 123, 0.15);
  padding-bottom: 10px;
  margin: 0 2px;
`;

const Teacher = styled.div`
  width: 380px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  margin: 2px;
  padding-left: 15px;
  border-radius: 5px;
  background-color: #1e757b;
  color: #f2ffdf;
`;

const Button = styled.button`
  height: 25px;
  background-color: #f2ffdf;
  border: none;
  color: #1e757b;
  border-radius: 5px;
  &:hover {
    background-color: #1e757b;
    color: #f2ffdf;
    border: 1px solid #f2ffdf;
  }
`;

const Hours = styled.p`
  position: absolute;
  padding-left: 130px;
`;

const TeacherList = () => {
  const dispatch = useDispatch();

  const teachers = useSelector(selectAllTeachers);

  const renderedTeachers = teachers.map((teacher) => (
    <Teacher
      key={teacher.id}
      style={{ display: 'flex' }}
    >
      <p>{teacher.name}</p>
      <Hours>{teacher.hours} Hours</Hours>
      <Button onClick={() => dispatch(deleteTeacher(teacher.id))}>
        Delete Teacher
      </Button>
    </Teacher>
  ));

  return <Container>{renderedTeachers}</Container>;
};

export default TeacherList;
