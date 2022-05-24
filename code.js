let value = {
    val1: 'hello',
    val2: {
        hello: 'world'
    }
};



try {
    console.log(value.something); //undefined
    console.log(value.something.other); //trying to pull from undefined

} catch (error) {
   console.log(error.name, error.message);
}
console.log('moving on')
