export interface UpdateUserDto {
  /**
   * User email.
   *
   * @format email
   */
  email?: string;
  /**
   * User name.
   *
   * @pattern ^[a-z0-9]+$
   * @maxLength 20
   */
  name?: string;
  /**
   * User nickname.
   *
   *
   */
  nickname?: string | null;
  /**
   * User password.
   *
   *
   */
  password?: string;
}
