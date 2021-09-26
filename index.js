function scuberGreetingForFeet(distance){
  let freeRide = 'This one is on me!' 
  let charges = 'I will gladly take your thirty bucks.' 
  let stopRide = 'No can do.'
  
  
  if (distance <= 400){
    return freeRide
  } else if (distance > 2000 && distance < 2500){
    return charges
  } else if (distance > 2500){
    return stopRide
   
  }
}


function ternaryCheckCity(destination) {
  return destination ==='NYC'? 'Ok, sounds good.': 'No go.'

  
}


function switchOnCharmFromTip(tipAmount){
  switch(tipAmount){
    case 'generous':
      return 'Thank you so much.'
      case 'not as generous':
        return 'Thank you.'
        default:
          return 'Bye.'
  }
}