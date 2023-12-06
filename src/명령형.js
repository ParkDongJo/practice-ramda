let names = [
  'alonzo church',
  'Haskell curry', 
  'stephen_kleene', 
  'John Von Neumann', 
  'stephen_kleene'
];
let result = [];

for (let i =0; i < names.length; i++) {
  let n = names[i];
  if (n !== undefined && n !== null) {
    let ns = n.replace(/_/, ' ').split(' ');
    for (let j = 0; j < ns.length; j++) {
      let p = ns[j];
      p = p.charAt(0).toUpperCase() + p.slice(1);
      ns[j] = p;
    }
    if (result.indexOf(ns.join(' ')) < 0) {
      result.push(ns.join(' '));
    }
  }
}
result.sort();