import * as fs from 'fs'
import * as Path from 'path'

export namespace FileHelper {
  export function getRoot(): string {
    return Path.join(__dirname, '../../..')
  }

  export function findFileContent(path: string): string {
    return fs.readFileSync(path, 'utf-8')
  }
}
