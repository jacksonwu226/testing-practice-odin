// This function takes a string and returns the first letter capitalized
export function capitalize(str){
  if(!str){
    return "";
  }
  let firstLetter = str.at(0).toUpperCase();
  return [firstLetter, str.slice(1)].join("");
}