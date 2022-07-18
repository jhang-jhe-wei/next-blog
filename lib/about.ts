import fs from 'fs'
import path from 'path'
import YAML from 'yaml'
import { assert, object, number, boolean, string, array, optional } from 'superstruct'

const filePath = path.join(process.cwd(), 'data', 'about.yml')
const AboutModel = object({
  education: array(object({
    title: string(),
    subTitle: string(),
    startedAt: string(),
    endedAt: string(),
    highlights: array(string())
  })),
  works: array(object({
    title: string(),
    subTitle: string(),
    startedAt: string(),
    endedAt: string(),
    highlights: optional((array(string())))
  })),
  achievements: array(object({
    title: string(),
    isFull: boolean(),
    highlights: array(string())
  })),
  skillsList: array(object({
    title: string(),
    skills: array(object({
      name: string(),
      proficiency: number()
    }))
    }
  ))
})

export async function getAboutData() {
  const file = fs.readFileSync(filePath, 'utf8')
  const data = YAML.parse(file)
  assert(data, AboutModel)
  return data
}
