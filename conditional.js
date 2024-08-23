let mhs = {
    name: "Kayy",
    age: 17,
    major: "Chemical",
    skills: ['Sysadmin', 'OOP', 'Design'],
    mhsActive: true,
}

console.log('mahasiswa boleh daftar : ' + (mhs.age > 17));

// if (mhs.major == "TRPL") {
//     console.log(mhs.name + " Jurusan TRMG");
// } else if (mhs.major == "TRKJ") {
//     console.log(mhs.name + " Jurusan TRKJ");
// } else if (mhs.major == "TRPL") {
//     console.log(mhs.name + " Jurusan TRPL");
// } else {
//     console.log(mhs.name + " Jurusan " + mhs.major);
// }
// Ternary
    // console.log(mhs.major == "TRPL" ? mhs.name + ' Jurusan TRPL' : mhs.name + "Bukan TRPL")

// Switch Case
// 

// conditional function

// kriteria : umur kurang dari 21, miskin, skill lebih dari 2

function cekkelulusan(peserta) {
    let age = peserta.age;
    let poor = peserta.poor;
    let skills = peserta.skills;
    console.log(peserta)

if ( age < 21, poor == true, skills.length > 2) {
    console.log("Mahasiswa lulus")
    // peserta lulus
} else if(age > 21, poor == true, skills.length >2) {
    console.log("Mahasiswa hampir lulus")
    // peserta hampir lulus
} else {
    console.log("Mahasiswa tidak lulus")
    // peserta tidak lulus
}
}

cekkelulusan(mhs);