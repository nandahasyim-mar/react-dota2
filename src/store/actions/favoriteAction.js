export const addFavorite = (data) => {
  return (dispatch) => {
    console.log(data, '<<<<< ini di')
    dispatch({
      type: 'ADD_FAVORITE',
      payload: {
        data
      }
    })
  }
}