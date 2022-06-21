import React from 'react'

export default function Footer(props) {
  return (
    <footer className="py-5 bg-dark">
        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; {props.webSite} {props.year}</p></div>
    </footer>
  )
}
