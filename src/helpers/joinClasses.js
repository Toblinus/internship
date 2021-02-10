const joinClasses = (major, ...minors) => {
    let result = major;
    for(let i = 0; i < minors.length; ++i){
        if(minors[i]) {
            result += ` ${minors[i]}`;
        }
    }
    return result;
}

export default joinClasses;