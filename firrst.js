// var names=["medo","hany","mahrius","mesho","zaki"];

// var x=prompt("Your Name");
// names.push(x);
// for(var i=0;i<names.length;i++){
//     console.log(names[i])
// }

var allQo=
[
    {quete:"'Be yourself; everyone else is already taken '",
     auother:"'Oscar Wilde'"},
    {quete:" 'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. '",
     auother:"'Albert Einstein'"},
    {quete:"'So many books, so little time'  ",
     auother:" 'Frank Zappa'"},
    {quete:" 'A room without books is like a body without a soul ' ",
     auother:"'Marcus Tullius Cicero'"},
     
    {quete:"'If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals'",
     auother:"'Albert Camus'"},
]  

function generateQo(){
    x=Math.floor(Math.random()*(allQo.length));
    document.getElementById("qouete").innerHTML=allQo[x].quete;
    document.getElementById("author").innerHTML=allQo[x].auother;
    // document.getElementById("author").innerHTML=allQo.auother[x];
    
}