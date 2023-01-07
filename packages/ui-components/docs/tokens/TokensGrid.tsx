import './TokensGrid.css'
import { fontSizes, fonts } from '@turborepo/tokens'

const namesMap = Object.keys(fontSizes).map(item => item)
const keysValues = Object.values(fontSizes).map(item => item)

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <>
      <table className="tokens-grid">
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            {hasRemValue && <th>Pixels</th>}
          </tr>
        </thead>

        <tbody>
          {Object.entries(tokens).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
                {hasRemValue && (
                  <td>{Number(value.replace('rem', '')) * 16}px</td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="tokens-box" style={{ fontFamily: fonts.default }}>
        {namesMap.map((item, key) => (
          <div className="tokens-box--item" key={key}>
            <div className="tokens-box--item-value">
              {item}
            </div>
            <div className="tokens-box--item-text" style={{ fontSize: keysValues[key] }}>Hello world!</div>
          </div>
        ))}
      </div>
    </>
  )
}
