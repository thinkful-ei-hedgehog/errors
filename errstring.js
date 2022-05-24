let arg = process.argv[2];

function showErrors(errorType) {
    try {
        if (errorType === 'string') {
            throw 'This is a string error'; //creates an error string
        } else {
            throw new Error('This is an error object'); //creates an error object
        }

    } catch (e) {
        console.log('ERROR TYPE', typeof e);
        console.log(e);
    }
}

showErrors(arg);