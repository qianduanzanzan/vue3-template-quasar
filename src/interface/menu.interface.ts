export interface Menu{
  label: string,
  routeName?: string,
  children?: Menu[]
}

export interface Props {
  leftDrawerOpen: Boolean
}
