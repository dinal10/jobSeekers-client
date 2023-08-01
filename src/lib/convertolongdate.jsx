export default function LongDate(tanggal) {
    var listBulan = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date(tanggal)
    var joinDate = `${listBulan[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`

    return joinDate
}