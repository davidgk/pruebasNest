import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsAdmin1660248821097 implements MigrationInterface {
  name = 'AddIsAdmin1660248821097';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "isAdmin" boolean NOT NULL DEFAULT false`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdmin"`);
  }
}
