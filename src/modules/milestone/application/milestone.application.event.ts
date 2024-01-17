export namespace MilestoneApplicationEvent {
  export namespace MilestoneCreated {
    export const key = 'milestone.application.milestone.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
