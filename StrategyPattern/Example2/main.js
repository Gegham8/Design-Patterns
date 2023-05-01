import { Config } from "./Config.js";
import { iniStrategy, jsonStrategy } from "./strategies.js";

async function main() {
  const iniConfig = new Config(iniStrategy);
  await iniConfig.load('samples/config.ini');
  iniConfig.set('book', 'design_paterns')
  await iniConfig.save('samples/conf_mod.ini')

  const jsonConfig = new Config(jsonStrategy);
  await jsonConfig.load('samples/config.json');
  jsonConfig.set('book.node.js', 'design_paterns')
  await jsonConfig.save('samples/conf_mod.json')
}

main()