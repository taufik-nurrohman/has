export const hasKey = (x, data) => x in data;
export const hasObjectKey = hasKey;
export const hasObjectValue = (x, data) => {
    for (let datum in data) {
        if (x === data[datum]) {
            return true;
        }
    }
    return false;
};
export const hasString = (x, data, start) => data.includes(x, start);
export const hasStringStart = (x, data, start) => data.startsWith(x, start);
export const hasStringEnd = (x, data, end) => data.endsWith(x, end);
export const hasValue = (x, data) => -1 !== data.indexOf(x);
