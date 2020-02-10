class common {
    getNumberArray(min, max) {
        const numArray = [];
        for (let i = min; i < max; i++) {
            numArray.push(i);
        }

        return numArray;
    }
}

export default common;