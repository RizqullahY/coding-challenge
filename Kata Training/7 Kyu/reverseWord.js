function reverseWords(str) {

	// Gunakan patern regEx untuk membagi berdasarkan spasi tetapi mempertahankan spasi
	str = str.split(/(\s+)/)
   str = str.map((word) => (
      // trim menghapus spasi yang ada
      word.trim() ? // bisa dihapus
      word.split("").reverse().join("") : 
      word
   ))
   // console.log(str)
   str = str.join("");
   // console.log(str)
   return str
}
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))