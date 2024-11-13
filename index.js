class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1,string.length)
  }

  static sanitize(string){
    return string.replace(/[^-, 'A-Za-z0-9]+/g, '')
  }

  static titleize(string){
    return string.split(' ').map((word, index) => {
      if((index !== 0) && (word === "the" || word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from")){
        return word
      } else {
        return this.capitalize(word)
      }
    }).join(' ')
  }
}

console.log(Formatter.capitalize('hEllo'))
console.log(Formatter.sanitize('hE^@llo'))
console.log(Formatter.titleize("chicken soup with rice and a few other songs"))