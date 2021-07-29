import axios from 'axios'

export default class Client {
  constructor(url) {
    this.url = url
  }

  async getComponents() {
    return (await axios.get(`${this.url}/project/IC/components`)).data
  }

  /**
   * @description fetches issues that belong to components (by ids). Performs
   * one request per component.
   * Merges the individual responses into one object:
   * {<component name 1>: <issue count 1>, ...}
   * @todo add more fine-grained error handling for potentially partial results
   */
  async countIssuesByComponents(components) {
    return Object.fromEntries(
      await Promise.all(
        components.map(async ({ name, id }) => [
          name,
          (
            await axios.get(`${this.url}/search`, {
              params: {
                jql: `project = IC and component = ${id}`,
                maxResults: 0
              }
            })
          ).data.total
        ])
      )
    )
  }
}
