export const itunesData = (obj) => {
  return {
    type: 'itunesData',
    payload: obj
  }
}

export const tabs = (obj) => {
  return {
    type: 'tabs',
    payload: obj
  }
}

export const mainTabs = (obj) => {
  return {
    type: 'mainTabs',
    payload: obj
  }
}

export const updateFavorite = (obj) => {
  return {
    type: 'favorite',
    payload: obj
  }
}

export const createFavoriteHash = (favArr) => {
  const hashSet = new Set();
  favArr.forEach((item) => {
    hashSet.add(item.id);
  })
  return {
    type: 'favoriteHash',
    payload: hashSet
  }
}