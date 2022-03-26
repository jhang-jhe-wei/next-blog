import fs from 'fs'
import path from 'path'
import YAML from 'yaml'
import { boolean, optional, assert, object, string, array } from 'superstruct'

const filePath = path.join(process.cwd(), 'data', 'portfolio.yml')
const PortfolioModel = array(object({
  title: string(),
  tag: string(),
  image: string(),
  description: string(),
  demo_link: string(),
  code_link: string(),
  highlight: optional(boolean())
}))

export async function getPortfolioData() {
  const file = fs.readFileSync(filePath, 'utf8')
  const data = YAML.parse(file)
  assert(data, PortfolioModel)
  return data
}
