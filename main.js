import nconf from 'nconf'
import Client from './lib/Client'

/**
 * @todo accept config path as env var/shell argument
 */
nconf.argv().env().file('./config.json')

const client = new Client(nconf.get('apiUrl'))

const main = async () => {
  try {
    const components = (await client.getComponents()).filter(
      component => component.lead === undefined
    )

    console.table(await client.countIssuesByComponents(components))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
