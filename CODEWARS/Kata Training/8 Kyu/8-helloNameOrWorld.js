// kalau ada namanya outputnya hello + nama. kalau tidak ada maka hello world

//* Cara Paling Tidak Recomended

function hello(name) {
	if(name){
      name = name.charAt(0).toUpperCase() + name.toLowerCase(); 
      /* Cuma ambil huruf pertama lalu dikapitalkan + semua huruf yang di kecilkan. 
      Jadi nanti huruf pertamanya ada 2. Kapital dan Biasa */
      resName = name.slice(0,1) + name.slice(2,999) 
      // diambil yang pertama(kapital) + ketiga sampai seterusnya
      return `Hello, ${resName}!`
   }else{
      return 'Hello, World!'
   }
}

console.log(hello('BERut'))