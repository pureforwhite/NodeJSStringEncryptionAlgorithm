let ES = function(initString) {
    let rice = (Math.floor(Math.random() * 9)) + 1;
    let A = Math.floor(Math.random() * 10);
    let B = Math.floor(Math.random() * 10);
    let X = `${A}${rice}${B}`;
    for(i in initString) {
        let C = initString.charAt(i);
        let D = C.charCodeAt() + rice;
        let E = String.fromCharCode(D);
        X += E;
    }
    return X;
}

let a = 'password';
a = ES(a);
console.log(a);
