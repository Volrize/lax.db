const fs = require('fs')
const { join } = require('path')

class DB {

constructor(){

}

ayarla(veri, değer){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] = değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 3))
}

getir(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
if(!dosya[veri]) throw new TypeError('Veri Bulunamadı.')
return dosya[veri] 
}

kontrol(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    return dosya[veri] ? true : false
}

sil(veri){
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    if(!dosya[veri]) throw new TypeError('Veri Bulunamadı.')
    delete dosya[veri]
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null ,3))
}

ekle(veri, değer){
    if(!veri) throw new TypeError('Veri Bulunamadı.')
    if (typeof değer !== 'number') throw new TypeError('Lütfen Bir Sayı Giriniz')
    if (!this.kontrol(veri)) throw new TypeError('Girdiğiniz Değer Databasede Bulunmamakta.')
    if (typeof this.getir(veri) !== 'number') throw new TypeError('Sayı Ekleyeceğiniz Değer Sayı Değil Yazıdır.')
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] += değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 3))
}

çıkar(veri, değer){
    if(!veri) throw new TypeError('Veri Bulunamadı.')
    if (typeof değer !== 'number') throw new TypeError('Lütfen Bir Sayı Giriniz')
    if (!this.kontrol(veri)) throw new TypeError('Girdiğiniz Değer Databasede Bulunmamakta.')
    if (typeof this.getir(veri) !== 'number') throw new TypeError('Sayı Ekleyeceğiniz Değer Sayı Değil Yazıdır.')
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] -= değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 3))
}

}


module.exports = new DB()