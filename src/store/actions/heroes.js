export function updateHeroes(results) {
  return {
    type: 'UPDATE_HEROES',
    results
  }
};

export function addCurrentOption(option) {
  return {
    type: 'ADD_CURRENT_OPTION',
    option
  }
};
