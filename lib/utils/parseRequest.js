module.exports = rawRequest => {
    const [method, path] = rawRequest.toString()
    .split(' ');

    const body = rawRequest.toString()
    .split('\r\n\r\n')[1];

    return {method, path, body};
};

