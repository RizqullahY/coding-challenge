function domainName(url) {
	url = url.replace(/(https?:\/\/)?(www.)?/i, "");
   const result = []
   for (let i = 0; i < url; i++) {
      while(url[i] != '.'){
         result.push(url[i])
      }
   }
   return result;
}
console.log(domainName("https://youtube.com"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("http://google.co.jp"))