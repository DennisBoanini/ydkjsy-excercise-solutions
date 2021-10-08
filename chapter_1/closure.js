function range(start, end) {
    if (end === null || end === undefined) {
        return (newEnd) => range(start, newEnd)
    }

    return [...Array(end)].map((_, i) => i = i + start).filter(n => n <= end);
}

module.exports = range;
