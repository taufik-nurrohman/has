const hasKey = (a, b) => a in b;
const hasObjectKey = hasKey;
const hasObjectValue = (a, b) => {
    for (let c in b) {
        if (a === b[c]) {
            return true;
        }
    }
    return false;
};
const hasValue = (a, b) => -1 !== b.indexOf(a);

Object.assign(exports || {}, {
    hasKey,
    hasObjectKey,
    hasObjectValue,
    hasValue
});
