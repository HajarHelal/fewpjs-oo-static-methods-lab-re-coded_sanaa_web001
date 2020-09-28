class Formatter {
  static capitalize(stri){
    return stri.charAt( 0 ).toUpperCase()+ stri.slice( 1 )
  }
  static sanitize( string ) {
      return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    }
}
