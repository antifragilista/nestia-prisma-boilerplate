export class CreateUserDto {
  readonly email: string;
  readonly name: string;
  readonly nickname: string | null;
  readonly password: string;
}
