import $ from 'jquery'

const showAlert = () => {
  $('#show-alert-button').click(() => {
    if (!window.confirm('本当に？')) {
      window.location.href = '/'
    } else {
      window.location.href = '/'
    }
  })
}

export default showAlert
