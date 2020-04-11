module.exports = (willCoreModuleInstance) => {
    willCoreModuleInstance.ui = () => require("../mocks/testAssignable.js");
};