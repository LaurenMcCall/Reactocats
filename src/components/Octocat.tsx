import React from 'react'

type OctocatProps = {
  link: string
  image: string
  imageAltText: string
  number: string
  numberLink: string
  name: string
  creatorLink: string
  creatorAvatar: string
  creatorAltText: string
}

export function Octocat(props: OctocatProps) {
  return (
    <article>
      <a href={props.link}>
        <img
          src={props.image}
          width="400"
          height="400"
          alt={props.imageAltText}
        />
      </a>

      <ul>
        <li>
          {props.number}
          <a href={props.numberLink}>
            <strong>{props.name}</strong>
          </a>
        </li>
        <li>
          <a href={props.creatorLink}>
            <img
              src={props.creatorAvatar}
              width="24px"
              height="24px"
              alt={props.creatorAltText}
            />
          </a>
        </li>
      </ul>
    </article>
  )
}
