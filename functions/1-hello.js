// domain/.netlify/functions/1-hello

const person = { name: 'John' }

exports.handler = async(event, context) => {
    return {
        statusCode: 200,
        body: `Our first Netlify function Example ${JSON.stringify(person)}`,   
    }
    // return {
    //     statusCode: 404,
    //     body: `You sucks`,   
    // }

} 

