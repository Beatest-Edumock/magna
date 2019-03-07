function encodeTestID(testID) {

    testID = testID.toString();

    const prefix = Math.random().toString(36).substr(2, 5);

    const suffix = Math.random().toString(36).substr(2, 5);

    const finalString = `${prefix}${testID}${suffix}`;

    return btoa(finalString);
}

function decodeTestIDString(encodedString) {

    const decodedString = atob(encodedString);
    console.log(decodedString);

    let number = decodedString.slice(5, decodedString.length);
    number = number.slice(0, -5);

    return number

}


export {encodeTestID, decodeTestIDString};