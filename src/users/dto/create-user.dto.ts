export interface CreateUserDto {
  /**
   * user email
   *
   * @format email
   */
  email: string;
  /**
   * User name.
   *
   * @pattern ^[a-z0-9]+$
   * @maxLength 20
   */
  name: string;
  /**
   * User email
   *
   *
   */
  nickname: string | null;
  /**
   * User password
   *
   *
   */
  password: string;
}

