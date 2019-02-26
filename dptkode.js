const regex = /AIK\d{5}/g;

function dptkode(str) {
    let a = []
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        m.forEach((match, groupIndex) => {
            a.push(match);
        });
    }
    return a;
}


module.exports = dptkode;