import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllLessons, selectLesson } from './lessonsSlice';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-radius: 0 0 15px 15px;
  width: 685px;
  height: 275px;
  background-color: rgba(30, 117, 123, 0.15);
  margin: 0 2px;
`;

const Days = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Tag = styled.div`
  width: 100px;
  color: red;
  margin-left: 5px;
  margin-right: 10px;
`;

const LessonContainer = styled.div`
  border-right: 2px solid black;
  padding-right: 5px;
  width: 496px;
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

const Lessons = () => {
  const dispatch = useDispatch();
  const lessons = useSelector(selectAllLessons);
  const pazartesiLessons = lessons.filter((item) => item.day === 'pazartesi');
  const salıLessons = lessons.filter((item) => item.day === 'salı');
  const çarşambaLessons = lessons.filter((item) => item.day === 'çarşamba');
  const perşembeLessons = lessons.filter((item) => item.day === 'perşembe');
  const cumaLessons = lessons.filter((item) => item.day === 'cuma');

  const selectButton = (e) => {
    let id = e.target.id;
    dispatch(selectLesson(id));
  };

  return (
    <Container>
      <Days>
        <Tag>Pazartesi</Tag>
        <LessonContainer>
          {pazartesiLessons.map((lesson) => {
            return (
              <Button
                key={lesson.id}
                id={lesson.id}
                onClick={(e) => selectButton(e)}
                selected={lesson.isActive}
              >
                {lesson.teacher}
              </Button>
            );
          })}
        </LessonContainer>
      </Days>
      <Days>
        <Tag>Salı</Tag>
        <LessonContainer>
          {salıLessons.map((lesson) => {
            return (
              <Button
                key={lesson.id}
                id={lesson.id}
                onClick={(e) => selectButton(e)}
                selected={lesson.isActive}
              >
                {lesson.teacher}
              </Button>
            );
          })}
        </LessonContainer>
      </Days>
      <Days>
        <Tag>Çarşamba</Tag>
        <LessonContainer>
          {çarşambaLessons.map((lesson) => {
            return (
              <Button
                key={lesson.id}
                id={lesson.id}
                onClick={(e) => selectButton(e)}
                selected={lesson.isActive}
              >
                {lesson.teacher}
              </Button>
            );
          })}
        </LessonContainer>
      </Days>
      <Days>
        <Tag>Perşembe</Tag>
        <LessonContainer>
          {perşembeLessons.map((lesson) => {
            return (
              <Button
                key={lesson.id}
                id={lesson.id}
                onClick={(e) => selectButton(e)}
                selected={lesson.isActive}
              >
                {lesson.teacher}
              </Button>
            );
          })}
        </LessonContainer>
      </Days>
      <Days>
        <Tag>Cuma</Tag>
        <LessonContainer>
          {cumaLessons.map((lesson) => {
            return (
              <Button
                key={lesson.id}
                id={lesson.id}
                onClick={(e) => selectButton(e)}
                selected={lesson.isActive}
              >
                {lesson.teacher}
              </Button>
            );
          })}
        </LessonContainer>
      </Days>
    </Container>
  );
};

export default Lessons;
