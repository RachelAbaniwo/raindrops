
const whatPrimeFactor = (anyNumber) => {
    if(anyNumber < 1 || typeof(anyNumber) !== "number") {
        return "Enter a valid number greater than 1";
    } else {
    
    if((anyNumber%3 === 0) && (anyNumber%5 !== 0) && (anyNumber%7 !== 0)) {
        return "Pling";
    }
    else if((anyNumber%5 === 0) && (anyNumber%3 !== 0) && (anyNumber%7 !== 0)) {
        return "Plang";
    }
    else if((anyNumber%7 === 0) && (anyNumber%5 !== 0) && (anyNumber%3 !== 0)) {
        return "Plong";
    }
    else if((anyNumber%3 === 0) && (anyNumber%5 === 0) && (anyNumber%7 !== 0)) {
        return "PlingPlang";
    }
    else if((anyNumber%3 === 0) && (anyNumber%5 !== 0) && (anyNumber%7 === 0)) {
        return "PlingPlong";
    }
    else if((anyNumber%3 !== 0) && (anyNumber%5 === 0) && (anyNumber%7 === 0)) {
        return "PlangPlong";
    }
    else if((anyNumber%3 === 0) && (anyNumber%5 === 0) && (anyNumber%7 === 0)) {
        return "PlingPlangPlong";
    }
    else if((anyNumber%3 !== 0) && (anyNumber%5 !== 0) && (anyNumber%7 !== 0)) {
        return anyNumber;
    }
    else {
        return "Enter a valid number!!!";
    }
 }
 

}

export default whatPrimeFactor;