interface MenuSection {
  title: string
  items: Array<SubMenuItem>
  viewAll?: {
    path: string
    text: string
  }
}

interface DevelopersMenuProps {
  title: string
  description: string
  sections: [MenuSection, MenuSection]
}

// type Sections = [MenuSection, MenuSection]
