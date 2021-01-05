
// Components
import { Seo } from 'components/common'

//

//
export default function Homes () {
  return (
    <>
      <Seo title="Homes" />

      <main className="page__homes">
        <div className="wrap--reg">

          <aside>

          </aside>

          <div className="grid">
            <div className="grid__item">
              <span className="unit-name"></span>
              <span className="unit-type"></span>

              <figure>
                <img src="" />
              </figure>

              <span className="area area--total">Total Living  SF</span>
              <span className="area area--interior">Interior  SF</span>
              <span className="area area--outdoor">Outdoor  SF</span>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
