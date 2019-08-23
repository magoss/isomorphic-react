import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail';
import renderer from 'react-test-renderer';
import React from 'react'


describe('Test Question Details Component', () => {
  describe('The container element', () => {
    describe('mapStateToProps', () => {
      it('should map the state to props correctly', () => {
        const appState = { questions: [{
          question_id: 43,
          body: 'some body 43'
        }, {
          question_id: 42,
          body: 'some body 42'
        }] };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);

        expect(componentState).toEqual({ question_id: 42, body: 'some body 42' });
      });
    });
  });

  describe('The display element', () => {
    it('should not regress', () => {
      const tree = renderer.create(
        <QuestionDetailDisplay 
          title="Some title changed"
          body="Some body"
          answer_count={2}
          tags={['tag1', 'tag2']}
        />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
    
  });
});