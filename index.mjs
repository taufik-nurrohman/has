export const hasKey = (a, b) => a in b;
export const hasObjectKey = hasKey;
export const hasObjectValue = (a, b) => {
    for (let c in b) {
        if (a === b[c]) {
            return true;
        }
    }
    return false;
};
export const hasValue = (a, b) => -1 !== b.indexOf(a);
