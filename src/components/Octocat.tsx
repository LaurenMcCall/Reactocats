import React from 'react'

type OctocatProps = {
  link: string
  image: string
  // imageAltText: string
  number: number
  // numberLink: string
  name: string
  authors: {
    link: string
    image: string
  }[]

  // authorLink: string
  // authorImage: string
  // creatorAltText: string
}

export function Octocat(props: OctocatProps) {
  return (
    <article>
      <a href={props.link}>
        <img
          src={props.image}
          width="400"
          height="400"
          // alt={props.imageAltText}
        />
      </a>

      <ul>
        <li>
          #{props.number}:
          <a href={props.link}>
            <strong> {props.name}</strong>
          </a>
        </li>

        {props.authors.map((author, key) => {
          return (
            <li key={key}>
              <a href={author.link}>
                <img
                  src={author.image}
                  width="24px"
                  height="24px"
                  // alt={props.creatorAltText}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
