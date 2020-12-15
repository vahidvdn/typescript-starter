import { IsEmail, IsNotEmpty } from 'class-validator';
export class TestDto {
  /**
   * User's email should goes here.
   * @example 'info@test.com'
   */
  @IsEmail()
  email: string;

  /**
   * User's password should goes here.
   * @example 'word with space'
   */
  @IsNotEmpty()
  password: string;
}
