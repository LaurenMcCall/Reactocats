import React from 'react'
import { Octocat } from './components/Octocat'

export function App() {
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
          <section className="container p-24">
            {/* <article>
              <a href="https://octodex.github.com//terracottocat/">
                <img
                  src="https://octodex.github.com//images/Terracottocat_Single.png"
                  width="400"
                  height="400"
                  alt="Terracottocat"
                />
              </a>

              <ul>
                <li>
                  #149:
                  <a href="https://octodex.github.com//terracottocat/">
                    <strong>Terracottocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/chubbmo">
                    <img
                      src="https://github.com/chubbmo.png"
                      width="24px"
                      height="24px"
                      alt="chubbmo"
                    />
                  </a>
                </li>
              </ul>
            </article> */}
            <Octocat
              link="https://octodex.github.com//terracottocat/"
              image="https://octodex.github.com//images/Terracottocat_Single.png"
              imageAltText="Terracottocat"
              number="#149:"
              numberLink="https://octodex.github.com//terracottocat/"
              name="Terracottocat"
              creatorLink="https://github.com/chubbmo"
              creatorAvatar="https://github.com/chubbmo.png"
              creatorAltText="chubbmo"
            />

            <article>
              <a href="https://octodex.github.com//octogatos/">
                <img
                  src="https://octodex.github.com//images/Octogatos.png"
                  width="400"
                  height="400"
                  alt="Octogatos"
                />
              </a>
              <ul>
                <li>
                  #148:
                  <a href="https://octodex.github.com//octogatos/">
                    <strong>Octogatos</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//sentrytocat/">
                <img
                  src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                  width="400"
                  height="400"
                  alt="Sentrytocat"
                />
              </a>
              <ul>
                <li>
                  #143:
                  <a href="https://octodex.github.com//sentrytocat/">
                    <strong>Sentrytocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronmcefee">
                    <img
                      src="https://github.com/cameronmcefee.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//boxertocat/">
                <img
                  src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                  width="400"
                  height="400"
                  alt="Boxertocat"
                />
              </a>
              <ul>
                <li>
                  #141:
                  <a href="https://octodex.github.com//boxertocat/">
                    <strong>Boxertocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rubyjazzy">
                    <img
                      src="https://github.com/rubyjazzy.png"
                      width="24px"
                      height="24px"
                      alt="rubyjazzy"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//suftocat/">
                <img
                  src="https://octodex.github.com//images/surftocat.png"
                  width="400"
                  height="400"
                  alt="Surftocat"
                />
              </a>
              <ul>
                <li>
                  #140:
                  <a href="https://octodex.github.com//suftocat/">
                    <strong>Surftocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//scubatocat/">
                <img
                  src="https://octodex.github.com//images/scubatocat.png"
                  width="400"
                  height="400"
                  alt="Scubatocat"
                />
              </a>
              <ul>
                <li>
                  #138:
                  <a href="https://octodex.github.com//scubatocat/">
                    <strong>Scubatocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/cameronfoxly">
                    <img
                      src="https://github.com/cameronfoxly.png"
                      width="24px"
                      height="24px"
                      alt="cameronfoxly"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//dinotocat/">
                <img
                  src="https://octodex.github.com//images/dinotocat.png"
                  width="400"
                  height="400"
                  alt="Dinotocat"
                />
              </a>
              <ul>
                <li>
                  #130:
                  <a href="https://octodex.github.com//dinotocat/">
                    <strong>Dinotocat</strong>
                  </a>
                </li>
                <li className="d-flex">
                  <a href="https://github.com/kimestoesta">
                    <img
                      src="https://github.com/kimestoesta.png"
                      width="24px"
                      height="24px"
                      alt="kimestoesta"
                    />
                  </a>
                  <a href="https://github.com/heyhayhay">
                    <img
                      src="https://github.com/heyhayhay.png"
                      width="24px"
                      height="24px"
                      alt="heyhayhay"
                    />
                  </a>
                </li>
              </ul>
            </article>

            <article>
              <a href="https://octodex.github.com//spidertocat/">
                <img
                  src="https://octodex.github.com//images/spidertocat.png"
                  width="400"
                  height="400"
                  alt="Spidertocat"
                />
              </a>
              <ul>
                <li>
                  #88:
                  <a href="https://octodex.github.com//spidertocat/">
                    <strong>Spidertocat</strong>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jeejkang">
                    <img
                      src="https://github.com/jeejkang.png"
                      width="24px"
                      height="24px"
                      alt="jeejkang"
                    />
                  </a>
                </li>
              </ul>
            </article>
          </section>
        </main>
        {/* <!-- <footer>
      <div>
        <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
      </div>
    </footer> --> */}
      </body>
    </div>
  )
}
export default App
