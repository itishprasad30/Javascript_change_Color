const   days=['mon','tue','wed','thr','fri','sat','sun']

for (let index = 0; index <= days.length-1; index++) {
    const element = days[index];
    console.log(element);
    
}

console.log("revese this ");

for (let index =days.length-1; index >=0;index-- ) {
    const element = days[index];
    console.log(element);
    
}