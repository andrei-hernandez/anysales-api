import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main(): Promise<void> {
  //@ts-ignore
  const user = await prisma.user.create({
    data: {
      email: "andrei.acevedo1@gmail.com",
      firstName: "Andrei",
      lastName: "Hernandez",
      role: "ROOT",
      avatar: {
        create: {
          url: "https://thumbs.dreamstime.com/b/gray-man-avatar-design-concept-ai-supported-81256396.jpg"
        }
      },
      companies: {
        create: [
          {
            name: "Anysales",
            description: "Anysales description",
            slug: "anysales",
            citySlug: "toluca",
            landingLayout: {},
            landingContent: {},
            products: {
              create: [
                {
                  name: "Anysales product",
                  description: "Anysales product description",
                  price: 1000.0,
                  isBestSeller: true,
                  images: {
                    create: [
                      {
                        url: "https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg"
                      }
                    ]
                  }
                },
                {
                  name: "Anysales product 2",
                  description: "Anysales product description 2",
                  price: 2000.0,
                  isBestSeller: false,
                  images: {
                    create: [
                      {
                        url: "https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  })
  console.info(user)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async (): Promise<void> => {
    const prismaDisconnect = async (): Promise<void> =>
      await prisma.$disconnect()
    // close Prisma Client at the end
    return prismaDisconnect()
  })
