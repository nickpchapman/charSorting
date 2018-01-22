const sortString = (string) => {

  axios.post('/', {
    unsorted: string
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}
