import { myRandomData } from "./MyOther.client";
import lib from '@overextended/ox_lib/client';

lib.registerContext({
  id: 'some_menu',
  title: 'Some context menu',
  options: [
    {
      title: 'Empty button',
    },
    {
      title: 'Disabled button',
      description: 'This button is disabled',
      icon: 'hand',
      disabled: true,
    },
    {
      title: 'Example button',
      description: 'Example button description',
      icon: 'circle',
      onSelect: () => {
        console.log('Pressed the button!');
      },
      metadata: [
        { label: 'Value 1', value: 'Some value' },
        { label: 'Value 2', value: 300 },
      ],
    },
    {
      title: 'Menu button',
      description: 'Takes you to another menu!',
      menu: 'other_menu',
      icon: 'bars',
    },
    {
      title: 'Event button',
      description: 'Open a menu from the event and send event data',
      icon: 'check',
      event: 'test_event',
      arrow: true,
      args: {
        someValue: 500,
      },
    },
  ],
});
RegisterCommand("test-menu", () => {
  lib.showContext('some_menu')
}, false)

on('onResourceStart', (resName: string) => {
  if (resName === GetCurrentResourceName()) {
    console.log(myRandomData)
    console.log('TypeScript boilerplate started!')
  }
})