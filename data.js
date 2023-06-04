const namaSaya = "fahrialRamadhan";
let usia = 14 ;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
  let generasi;
   // if (30 == 30 ) //truee
  //  if (10 == 30 ) // false
      if (usia > 10 && usia < 20) { 
        generasi = "generasi remaja";
        //INI ADALAH KONDISI PERTAMA
        //console.log('anda remaja');
    }
    else if (usia > 20 && usia < 30) {
      generasi = "generasi dawasa";
       // console.log('anda dewasa');
    }
    else if (usia >= 30) {
      generasi = "generasi tua";
       // console.log('anda meninggal');
    }
    else if (usia > 2 && usia < 10) {
        //INI ADALAH KONDISI TIDAK TERPENUHI 
        generasi = "generasi anak anak";
        //console.log('wah saya tidak mengerti');
    }
    else {
      generasi = "generasi tidak mengerti";
       // console.log('anda tidak mengerti');
    }

    return biodata.innerHTML = generasi;
  //  console.log(`nama saya adalah ${namaSaya} dan usia saya ${usia} tahun`);
  //  console.log("nama saya adalah", namaSaya);
}


console.log(namaSaya);
console.log(usia);

generateBiodata();


// > lebih dari
// < kurang dari

// if jika
 