export const handler = async(event) => {
    
    
     const response = {
        statusCode: 200,
        body: JSON.stringify('Jahvonni Wright says '+ event.queryStringParameters.keyword),
    };

    return response;
};
