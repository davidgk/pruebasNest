import { MigrationInterface, QueryRunner } from 'typeorm';

export class createFirstAdminUser1660680774836 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO public.users("firstName", "lastName", password, "isAdmin", username, email, role) VALUES ('adm'
            , 'adm', '$2b$10$in8LTBkqcqPHcZh4Tta4Q.Y8H10lYDvh3no9i2dhSp7Hwn.OfDb2a', 'true', 'adm', 'adm@adm.com', 'admin');`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM  public.users where email = 'adm@adm.com', 'admin'`
    );
  }
}
