import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import AprovalCard from './AprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <AprovalCard>
                <h4>Warning!</h4>
                Are you sure your want to do this?
            </AprovalCard>
            <AprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" text="Great, I like it!" avatar={faker.image.avatar()} />
            </AprovalCard>
            <AprovalCard>
                <CommentDetail author="Charlie" timeAgo="Today at 5:15PM" text="Well, It could be worst..." avatar={faker.image.avatar()} />
            </AprovalCard>
            <AprovalCard>
                <CommentDetail author="Mary" timeAgo="Today at 11:24AM" text="Thank you, It's good" avatar={faker.image.avatar()} />
            </AprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
