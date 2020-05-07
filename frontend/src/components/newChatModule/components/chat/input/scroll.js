export function scrollToBottom () {
    setTimeout(function () {
      var scrollContainer = document.getElementById('message-window')
      var isScrolledToBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight <= scrollContainer.scrollTop + 1
      if (!isScrolledToBottom) { scrollContainer.scrollTop = scrollContainer.scrollHeight }
    }, 201)
  }