import axios from 'axios'

const MAX_RESULTS = 100

export default class Client {
  constructor(url) {
    this.url = url
  }

  async getComponents() {
    return (await axios.get(`${this.url}/project/IC/components`)).data
  }

  /**
   * @description recursively fetches issues that belong to components (by ids).
   * Page size is controlled by MAX_RESULTS constant.
   * Prints progress.
   * @todo lift MAX_RESULTS to config
   */
  async getIssues(componentIds, startAt = 0) {
    const {
      data: { issues, total }
    } = await axios.get(`${this.url}/search`, {
      params: {
        jql: `project = IC and component in (${componentIds.join(',')})`,
        maxResults: MAX_RESULTS,
        startAt,
        fields: 'components'
      }
    })
    console.log(`${Math.min(startAt + MAX_RESULTS, total)}/${total}`)
    return startAt + MAX_RESULTS >= total
      ? issues
      : issues.concat(await this.getIssues(componentIds, startAt + MAX_RESULTS))
  }
}
