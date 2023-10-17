import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';
import { mockUsersFactory } from './seeds/utils/create-mock-user';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue(10),
          },
        },
      ],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('should create a user', async () => {
    const mockUsers = mockUsersFactory(3);

    const createdUsers = await service.user.createMany({
      data: mockUsers,
    });
    expect(mockUsers.length).toEqual(createdUsers.count);

    const removedCount = await service.user.deleteMany({
      where: {
        id: {
          in: mockUsers.map((user) => user.id),
        },
      },
    });
    expect(removedCount.count).toEqual(mockUsers.length);
  });
});
