import nconf from 'nconf'
import Client from './lib/Client'
import { extractIds, groupByComponent, preparePrint } from './lib/utils'

/**
 * @todo accept config path as env var/shell argument
 */
nconf.argv().env().file('./config.json')

const client = new Client(nconf.get('apiUrl'))

const main = async () => {
  try {
    console.log('fetching components...')
    const componentIds = extractIds(await client.getComponents())
    console.log(`done, fetched ${componentIds.length} leadless components`)

    console.log('fetching issues...')
    const issues = await client.getIssues(componentIds)
    console.log(`done, fetched ${issues.length} issues`)

    console.table(preparePrint(groupByComponent(issues)))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
