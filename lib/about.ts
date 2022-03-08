import fs from 'fs'
import path from 'path'
import YAML from 'yaml'

const filePath = path.join(process.cwd(), 'data', 'about.yml')
export async function getAboutData() {
  const file = fs.readFileSync(filePath, 'utf8')
  return YAML.parse(file)
}
