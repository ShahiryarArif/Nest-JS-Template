import dbConfig from "../config/db.config";
import { DataSource, DataSourceOptions } from "typeorm";
import { runSeeders, SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./main.seeder";
console.log("sfsdfsdf = == = = ", __dirname);


const options: DataSourceOptions & SeederOptions = {
  ...dbConfig(),
  factories: [`${__dirname}/*.factory.ts`],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);
dataSource.initialize()
  .then(async () => {
    await dataSource.synchronize(true);
    await runSeeders(dataSource);
    process.exit();
  });
