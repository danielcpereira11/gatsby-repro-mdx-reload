const config: DevelopersMenuProps = {
  title: "Developers",
  description:
    "Cat ipsum dolor sit amet, ears back wide eyed murr i hate humans they are so annoying. Hunt by meowing loudly at 5am next to human slave food dispenser toilet paper attack claws fluff everywhere meow miao french ciao",
  sections: [
    {
      title: "Quickstarts",
      items: [
        {
          title: "Native / Mobile app",
          path: "/mobile",
          imageUrl: "http://placekitten.com/171/180",
        },
        {
          title: "Regular Web App",
          path: "/web-app",
          imageUrl: "http://placekitten.com/171/180",
        },
        {
          title: "Single Page App",
          path: "/spa",
          imageUrl: "http://placekitten.com/171/180",
        },
        {
          title: "Backend / API",
          path: "/backend",
          imageUrl: "http://placekitten.com/171/180",
        },
      ],
    },
    {
      title: "Resources",
      viewAll: {
        path: "/resources",
        text: "View All Resources",
      },
      items: [
        {
          title: "Authentication API",
          path: "/spa",
          imageUrl: "http://placekitten.com/171/180",
        },
        {
          title: "Management API",
          path: "/backend",
          imageUrl: "http://placekitten.com/171/180",
        },
      ],
    },
  ],
}

export default config
