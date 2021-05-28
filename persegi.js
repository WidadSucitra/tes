module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() =>
            callback(new Error("Ukuran persegi harus lebih besar dari 0: p= " + x + " dan l= " + y), null),
            2000);
    } else {
        setTimeout(() =>
            callback(null, {
                keliling: () => (2 * (x + y)),
                luas: () => (x * y)
            }),
            2000);
    }
}