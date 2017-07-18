let date = new Date( 2017, 6 , 17 )

function month( date ) {

  let monthRange = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  if( date == 'Invalid Date' || date == undefined ) {
    throw new Error( 'Please enter a valid date STRING with the format YYYY, MM, DD' )
  } else {
    return monthRange[ date.getMonth() - 1 ]
  }
}

function reverseSentence( string ) {
  if( typeof string === 'string' || string instanceof String ) {
  return string.split(" ").reverse().join(" ")
  } else {
    throw new Error( "Please enter a valid string enclosed in quotation marks" )
  }
}

function nameProps( obj ) {
  if( obj !== null && typeof obj === 'object' && obj.length === undefined ) {
    return Object.keys( obj ).sort()
  } else {
    throw new Error( 'Please enter a valid object containing key and value pairs' )
  }
}

module.exports = {
  month,
  reverseSentence,
  nameProps
}
// module.exports = {
//   month,
//   nameProps,
//   filterBetween
// }
