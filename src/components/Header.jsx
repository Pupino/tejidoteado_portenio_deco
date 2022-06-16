import React from 'react'

export default function Header(props) {
  return (
    <header class="bg-dark py-5">
        <div class="container">
            <div class="text-center text-white">
                <h1 class="display-4 fw-bolder">{props.greeting}</h1>
                <p class="lead fw-normal text-white-50 mb-0">{props.subTitle}</p>
            </div>
        </div>
    </header>
  )
}
