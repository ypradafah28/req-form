// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "",

    authDomain: "",

    databaseURL: "",

    projectId: "form-login-ae992",

    storageBucket: "",

    messagingSenderId: "",

    appId: ""

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let reqFormDataDB = firebase.database().ref("reqFormData")

document.querySelector("#formLogin").addEventListener("submit", submitForm)


function submitForm(e) {
    e.preventDefault()

    const namaLengkapPemohon = ambilValue("#nama")
    const instansi = ambilValue("#instansi")
    const hp = ambilValue("#hp")
    const email = ambilValue("#email")
    const kebutuhanData = ambilValue("#kebutuhan_data")
    const tujuanData = ambilValue("#tujuan_data")

    console.log(namaLengkapPemohon, instansi, hp, email, kebutuhanData, tujuanData)
    sendDB(namaLengkapPemohon, instansi, hp, email, kebutuhanData, tujuanData)

}

const sendDB = (namaLengkapPemohon, instansi, hp, email, kebutuhanData, tujuanData) => {
    let newReqFormDataDb = reqFormDataDB.push()

    newReqFormDataDb.set({
        namaLengkapPemohon : namaLengkapPemohon,
        namaInstansi : instansi,
        nomorHp : hp,
        emailid : email,
        kebutuhanData : kebutuhanData,
        tujuanPermintaanData : tujuanData
    })
}

const ambilValue = (id) => {
    return document.querySelector(id).value
}
