const initialState = {
  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
    {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum'
    }
  ],

  columns: [
    {
      id: '1',
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: '2',
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: '3',
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: '4',
      listId: '2',
      title: 'Test',
      icon: 'gamepad,'
    }
  ],

  cards: [
    { id: '1', columnId: '1', isFavorite:false, title: 'This is Going to Hurt' },
    { id: '2', columnId: '1', isFavorite:false, title: 'Interpreter of Maladies' },
    { id: '3', columnId: '2', isFavorite:false, title: 'Harry Potter' },
    { id: '4', columnId: '2', isFavorite:false, title: 'Star Wars' },
    { id: '5', columnId: '3', isFavorite:false, title: 'The Witcher' },
    { id: '6', columnId: '3', isFavorite:false, title: 'Skyrim' }
  ],

  searchPhrase: ''

};

export default initialState;