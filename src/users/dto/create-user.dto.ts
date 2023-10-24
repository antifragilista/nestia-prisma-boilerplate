export class CreateUserDto {
  /**
   * @format email
   */
  readonly email: string;
  readonly name: string;
  readonly nickname: string | null;
  readonly password: string;
}

// export interface CreateUserDto {
//   readonly email: string;
//   readonly name: string;
//   readonly nickname: string | null;
//   readonly password: string;
// }

