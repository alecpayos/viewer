import { servicesManager } from "./App";

export const activateBoneWindowLevel = () => {
  const { toolbarService } = servicesManager.services
  toolbarService.recordInteraction({
    groupId: 'WindowLevel',
    interactionType: 'action',
    itemId: 4,
    commands: [
      {
        commandName: 'setWindowLevel',
        commandOptions: {
          description: 'Bone',
          level: '480',
          window: '2500'
        },
        context: 'CORNERSTONE',
      },
    ],
  })
};
