//https://www.codewars.com/kata/52b50a20fa0e77b304000103
function isSantaClausable(obj) {
    const hasHoProp =  typeof obj.sayHoHoHo ===  'function';
    const hasGiftsProp = typeof obj.distributeGifts === 'function'; 
    const hasChimneyProp = typeof obj.goDownTheChimney === 'function';  
    if (hasHoProp && hasGiftsProp && hasChimneyProp){
      return true;
  }
     return false;
}

function isSantaClausable(obj) {
  return  typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney) == 'function';
}
//https://www.codewars.com/kata/52e5e86b2ff32887280002e4

function Cylon(model) { this.model = model; }
Cylon.prototype.attack = function() { return "Destroy all humans!"; }

function HumanSkin(model){ return new Cylon(model); }
HumanSkin.prototype = Cylon.prototype;
HumanSkin.prototype.infiltrate = function() { return "Infiltrate the colonies"; }
