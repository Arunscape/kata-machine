export default function two_crystal_balls(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length))

  const startfrom = breaks.findIndex(b => b) - jump

  const ret = startfrom + breaks.slice(startfrom, breaks.length).findIndex(b=>b)

  return Math.max(-1, ret)

}
