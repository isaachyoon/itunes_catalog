const INITIAL_STATE = {
  mainTabs: {
    tabOptions: ['Search Results', 'Favorite'],
    activeTab: 'Search Results'
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'itunesData':
      return { ...state, itunesData: action.payload };
    case 'tabs':
      return { ...state, tabs: action.payload};
    case 'mainTabs':
      return { ...state, mainTabs: action.payload};
    case 'favorite':
      return { ...state, favorite: action.payload};
    case 'favoriteHash':
      return { ...state, favoriteHash: action.payload};
    default:
      return state;
  }
}