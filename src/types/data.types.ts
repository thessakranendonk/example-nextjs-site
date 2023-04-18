export interface SpecialistContact {
  specialist: {
    name: string
    title: string
  }
  assistant?: {
    name: string
    title?: string
  }
  phone: string
  fax?: string
}
