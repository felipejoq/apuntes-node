import { yarg } from './plugins';
import { ServerApp } from './presentation/server.app';

const main = async () => {
  const { t: table, l: limit, s: showTable, n: name, p: path } = yarg;
  ServerApp.run({table, limit, showTable, name, path});
}

(async () => {
  await main()
})()
