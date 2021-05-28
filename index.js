console.log("hello world dari handsone pertemuan 09")

var persegi = require('./persegi')

function solvePersegi(p, l) {
    console.log("Persegi dengan p= " + p + " dan l= " + l);

    persegi(p, l, (err, segi) => {
        if (err) {
            console.log("ERROR: " + err.message);
        } else {
            console.log("luas persegi adalah : " + segi.luas());
            console.log("keliling persegi adalah : " + segi.keliling());
        }
    });

    console.log("ini akan ditampilkan setelah pemanggilan fungsi persegi");
}

solvePersegi(2, 4);
// solvePersegi(3, 5);
// solvePersegi(0, 5);
solvePersegi(-3, 5);