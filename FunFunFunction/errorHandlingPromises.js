function deleteCat(catId) {
  return database.delete('cats', catId)
}

function deleteButtomClickHandler(e) {
  const catId = e.target.data['cat-ig']

  deleteCat(catId)
    .then(() => removeItemElementFromPage(catId))
    .catch(err =>
      showMessageDialog(
        `item ${getCatName(catId)} war not deleted`))
}
