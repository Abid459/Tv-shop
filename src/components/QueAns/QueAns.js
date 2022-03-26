import React from 'react';

const QueAns = () => {
    return (
        <div>
            <h4>Question:how react works?</h4>
            <p>Answer:React create a virtual DOM. When a piece of particular information in Browser DOM needs to update 'react' compares the difference between the current state and the previous state. And updates that particular information in browser dom without rendering the whole page</p>

            <h4>Qustion: Difference between state and props</h4>
            <p>Answer: The state is like local data storage. The data which can be changed should be assigned in the state.
                On the other hand, props is a read-only value(data) that is used to pass data from one component to another component
            </p>

            <h4>How useState works?</h4>
            <p>Answer: useState is a hook that we use in functional components to make it a stateful component. useState give a variable that can be changed and a function that is used to update the initial value of the state</p>
        </div>
    );
};

export default QueAns;