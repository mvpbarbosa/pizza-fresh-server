import { Prisma, PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';

export const users: Prisma.UserCreateInput[] = [
  {
    nickname: 'marcosbarbosa',
    name: 'Marcos Barbosa',
    password: 'Abcd@1234',
    image: 'https://i.pinimg.com/736x/53/06/ce/5306ce49b18bcc4013e97720d1764b88.jpg'
  }
]

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: {nickname: obj.nickname},
      update: {},
      create: {
        ...obj,
        password: await bcrypt.hash(obj.password, 10)
      },
    })
  }
}
