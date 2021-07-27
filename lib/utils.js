/**
 * @description extracts ids of leadless components.
 */
export const extractIds = components =>
  components.reduce((p, c) => {
    if (c.lead === undefined) {
      p.push(c.id)
    }
    return p
  }, [])

/**
 * @description produces a mapping from component name to issue count.
 * I assume that issue belongs to one component only.
 */
export const groupByComponent = issues =>
  issues.reduce(
    (
      p,
      {
        fields: {
          components: [{ name }]
        }
      }
    ) => {
      if (!p.hasOwnProperty(name)) {
        p[name] = 0
      }
      p[name]++
      return p
    },
    {}
  )

/**
 * @description takes a mapping from component name to issue count and converts
 * it to a pretty-printable array
 * @todo sort by issue count
 */
export const preparePrint = count =>
  Object.entries(count).map(([component, issues]) => ({
    component,
    issues
  }))
