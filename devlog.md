## LAB STEPS
components/todos/CreateTodo.js 

1. Set component's initial state with the constructor method
2. Add onChange handler to the input that calls the handleChange function
3. Create the handleChange function (really you can do steps 2 and 3 in either order as long as you do both before testing)
4. Import connect from react-redux and set up the export to match (export default connect(null, mapDispatchToProps)(CreateTodo))
5. And of course now we need a mapDispatchToProps function. Arrow function!
6. Update the form tag to add the submit handler and then code the handleSubmit function!

reducers/manageTodo.js

7. Add the case statements to handle the action types! There's only one in this case.
