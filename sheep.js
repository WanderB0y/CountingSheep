const countSheeps = [ true, undefined, null, true, false ] 
    .reduce(( acumulator, sheep ) => { 
        if ( sheep !== true ) { 
            return acumulator 
        } 
        return acumulator + 1 
    }, 0 );

console.log(countSheeps);