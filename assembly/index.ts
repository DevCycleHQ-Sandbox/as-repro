import { JSON } from 'assemblyscript-json/assembly'

export function test(testJson: string): string {
    const data = JSON.parse(testJson)
    return data.stringify()
}
