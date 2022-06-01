import React from 'react'

export default function Footer(props) {
  return (
    <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; {props.webSite} {props.year}</p></div>
    </footer>
  )
}
