import React from 'react'

export default function Header(props) {

  return (
    <header className={props.headerClass}>
        <div className="container">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">{props.greeting}</h1>
                <p className="lead fw-normal text-white-50 mb-0">{props.subTitle}</p>
            </div>
        </div>
    </header>
  )
}
