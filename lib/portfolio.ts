import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const filePath = path.join(process.cwd(), 'data', 'portfolio.yml')
export async function getPortfolioData() {
  const file = fs.readFileSync(filePath, 'utf8')
  return YAML.parse(file)
}
