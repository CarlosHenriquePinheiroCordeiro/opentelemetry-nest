import { Customer } from 'src/customer/entities/customer.entity';
import { DataSource } from 'typeorm';
import * as path from 'path';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: path.join(__dirname, 'database.sqlite'),
  entities: [Customer],
  migrations: [path.join(__dirname, 'migrations', '*{.ts,.js}')],
  synchronize: true,
});