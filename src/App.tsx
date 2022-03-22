import React from 'react'
import { Octocat } from './components/Octocat'
import octocats from './octocats.json'

export function App() {
  const octocatsFromData = octocats.map((octocat) => (
    <Octocat
      key={octocat.number}
      number={octocat.number}
      link={octocat.link}
      image={octocat.image}
      name={octocat.name}
      // QUESTION: Explain this more please
      authorLink={octocat.authors[0].link}
      authorImage={octocat.authors[0].image}
    />
  ))
  return (
    <div>
      <body>
        <header>
          <div className="container p-24">
            <nav>
              <a className="d-flex" href="#">
                <img
                  className="mr-3px"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  width="43"
                  height="43"
                  alt="GithubLogo"
                />
              </a>

              <a className="bold mr-24 d-flex p-16" href="#">
                Octodex
              </a>

              <a className="gray-text mr-16 p-16" href="#">
                Home
              </a>
              <a className="mr-16 p-16" href="https://octodex.github.com/faq/">
                FAQ
              </a>
              <a className="p-16" href="#">
                RSS
              </a>
              <a
                className="p-16 ml-auto mr-16-media"
                href="https://twitter.com/githubdesign"
              >
                Follow us on Twitter
              </a>
              <a
                className="display-none d-media-block p-16-media "
                href="https://github.com/"
              >
                Back to GitHub.com
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="container p-24">{octocatsFromData}</section>
        </main>
        <footer>
          <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
        </footer>
      </body>
    </div>
  )
}
export default App
