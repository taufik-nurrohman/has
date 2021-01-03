const hasKey = (x, data) => x in data;
const hasObjectKey = hasKey;
const hasObjectValue = (x, data) => {
    for (let datum in data) {
        if (x === data[datum]) {
            return true;
        }
    }
    return false;
};
const hasString = (x, data, start) => data.includes(x, start);
const hasStringStart = (x, data, start) => data.startsWith(x, start);
const hasStringEnd = (x, data, end) => data.endsWith(x, end);
const hasValue = (x, data) => -1 !== data.indexOf(x);

Object.assign(exports, {
    hasKey,
    hasObjectKey,
    hasObjectValue,
    hasString,
    hasStringStart,
    hasStringEnd,
    hasValue
});
