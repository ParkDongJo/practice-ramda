let names = [
  'alonzo church',
  'Haskell curry', 
  'stephen_kleene', 
  'John Von Neumann', 
  'stephen_kleene'
];

const isValid = s => !_.isNull(s) && !_.isUndefined(s);

_.chain(names)
  .filter(isValid)
  .map(s => s.replace(/_/, ' '))
  .uniq()
  .map(_.startCase)
  .sort()
  .value();
  