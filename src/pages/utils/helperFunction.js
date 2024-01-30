export const getUrlMap = (latitude, longitude) => {
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  };

  export const firstLetterCapital = (string="") => {
    const capitalize = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return capitalize
  }

  export default getUrlMap; 
