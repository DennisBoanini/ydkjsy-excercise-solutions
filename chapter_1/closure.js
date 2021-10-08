function range(start, end) {
    if (end === null || end === undefined) {
        return (newEnd) => range(start, newEnd)
    }

    return [...Array(end)].map((_, i) => i = i + start).filter(n => n <= end);
}

module.exports = range;

// console.log(range(3, 8))

var start3 = range(4);
console.log(start3(8))
