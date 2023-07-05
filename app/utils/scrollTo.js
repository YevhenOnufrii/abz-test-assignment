export const scrollTo = (event, anchor) => {
  const target = document.querySelector(anchor)
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  event.preventDefault()
}
