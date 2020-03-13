function newsTextValidator(inputText) {
    // We can add more input validation here
    let result = (inputText == null || inputText === undefined || inputText.length < 10) ? false : true;
    return result;
}

export { newsTextValidator }
