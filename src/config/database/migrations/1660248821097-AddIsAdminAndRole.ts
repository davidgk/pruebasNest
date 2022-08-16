import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsAdminAndRoleAndRole1660248821097 implements MigrationInterface {
  name = 'AddIsAdminAndRole1660248821097';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "isAdmin" boolean NOT NULL DEFAULT false`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "role" character varying(128) default 'user'`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdmin"`);
  }
}
