const regex = /\s\w{4,}\s\w\s/g;

function dptkelas(str) {
    let m;
    let a = [];
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            a.push(match[match.length - 2]);
        });
    }
    return a;
}

module.exports = dptkelas;