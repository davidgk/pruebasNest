import { MigrationInterface, QueryRunner } from 'typeorm';

export class createAdminUser1660246594416 implements MigrationInterface {
  name = 'createAdminUser1660246594416';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`
    );
  }
}
