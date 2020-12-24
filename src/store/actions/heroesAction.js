import axios from 'axios'

export const getHeroes = () => {
  return (dispatch, getState) => {
    axios.get('https://api.opendota.com/api/heroStats')
      .then(({ data }) => {
        // console.log(data, '<<<<< ini data heroes di action');
        dispatch({
          type: "SET_HEROES",
          payload: {
            heroes: data
          }
        })
      })
      .catch(console.log)
  }
}