import expect from 'expect';
import courseReducer from './courseReducer';
import *as actions from '../actions/courseAction';

describe('Course Reducer ',() => {
  it('Should  add course  when passed  CREATE_COURSE_SUCCESS',()=>{
    //arrange
    const initialState = [
      {id:'A',title:'A'},
      {id:'B',title:'B'},
      {id:'C',title:'C'}
    ];
    const course ={id:'B',title:'New Title'};
    const action = actions.updateCourseSuccess(course);
    //act
    const newState = courseReducer(initialState, action);
    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id =='A');
    //assert
    expect(newState.length).toEqual(3);
    expect(untouchedCourse.title).toEqual('A');
    expect(updatedCourse.title).toEqual('New Title');

  });
});
