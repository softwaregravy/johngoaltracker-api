export namespace ResourceApplicationEvent {
  export namespace ResourceCreated {
    export const key = 'resource.application.resource.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
