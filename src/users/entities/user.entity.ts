import {User as UserEntity} from '@prisma/client'

export class User implements UserEntity {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
