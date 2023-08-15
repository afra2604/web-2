function calculate() {
    var bottle = parseInt(document.getElementById("botol").value)
    var straw = parseInt(document.getElementById("sedotan").value)
    var putung = parseInt(document.getElementById("rokok").value)
    var day = 365
    var hasil = (bottle + straw + putung) * day
    document.getElementById("hasil").innerHTML="Total sampah plastik per tahun " + "<b>" + hasil + "</b>"
}